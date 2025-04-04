import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component'; 
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const importModules = [
  RouterOutlet, 
  HeaderComponent, 
  FooterComponent, 
  HttpClientModule,
  MatSnackBarModule
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...importModules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bus-booking-web';
}
