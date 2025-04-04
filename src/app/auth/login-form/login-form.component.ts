import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { 
  FormsModule, 
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { SnackBarService } from '../../services/snack-bar.service';

const importModules = [
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule
];

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [...importModules],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  authForm!: FormGroup;
  isLogin = true;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginFormComponent>,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private snackBarService: SnackBarService
  ){
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    });

    if(this.isLogin){
      this.authForm.removeControl('confirmPassword');
    }
  }

  toggleMode(){
    this.isLogin = !this.isLogin;
    if(this.isLogin){
      this.authForm.removeControl('confirmPassword');
    } else {
      this.authForm.addControl('confirmPassword', this.fb.control('', Validators.required));
    }
  }

  submitForm(){
    if(this.authForm.valid){
      // console.log(this.authForm.value);

      if(this.isLogin){
        this.authService.login(this.authForm.value).subscribe({
          next: (response) => {
            // console.log('Login success:', response);
            const user = JSON.stringify(response);
            this.localStorageService.saveUserData(user);
            this.dialogRef.close(this.authForm.value);
            this.snackBarService.showMessage('Login successful', 'OK');
          },
          error: (error) => {
            console.error('Login error:', error);
            this.errorMessage = error.error.message;
          }
        });
      } else {
        this.authService.signUp(this.authForm.value).subscribe({
          next: (response) => {
            // console.log('Signup success:', response);
            this.dialogRef.close(this.authForm.value);
            this.snackBarService.showMessage('Signup successful', 'OK');
          },
          error: (error) => {
            console.error('Signup error:', error);
            this.errorMessage = error.error.message;
          }
        });
      }
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
