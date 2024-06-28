import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    usuario!: string;
    senha!: string;

  constructor(private clienteService: ClienteService, private router: Router) {}

  login(): void {
    this.clienteService.login(this.usuario, this.senha).subscribe(
      response => {
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.router.navigate(['/listar-clientes']);
      },
      error => {
        console.error('Erro no login:', error);
        alert('Usuário ou senha incorretos.');
      }
    );
  }
}