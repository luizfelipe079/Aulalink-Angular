import { Component } from '@angular/core';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService) {}

  login() {
    const userData = {
      email: this.email,
      senha: this.senha
    };

    this.authService.autenticate(userData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Erro de autenticação:', error);
      }
    );
  }
}
