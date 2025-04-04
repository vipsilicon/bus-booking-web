import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../../auth/login-form/login-form.component';
import { AuthService } from '../../services/auth.service'; 
import { LocalStorageService } from '../../services/local-storage.service';
import { SnackBarService } from '../../services/snack-bar.service'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  login: boolean = false;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private snackBarService: SnackBarService
  ){}
  openAuthModal(){
    if(!this.login){
      const dialogRef = this.dialog.open(LoginFormComponent, {
        width: '400px',
        autoFocus: false
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if(result){
          console.log('Result: '  + result);
          this.login = true;
        }
      });
    } else {
      const user = this.localStorageService.getUserData();
      if(user){
        this.authService.logout(user.token).subscribe({
          next: (response) => {
            console.log("Logout completed" + response);
            this.localStorageService.clearUserData();
            this.login = false;
            this.snackBarService.showMessage('Logged out successfully', 'OK');
          },
          error: (error) => {
            console.error('Logout error:', error);
          }
        })
      } else {
        console.log('User already logout');
      }
      
    }
  }

}
