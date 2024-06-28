import { Cliente } from './../../models/cliente';
import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent {
  cliente: Cliente = {
    cnpj: '',
    razaoSocial: '',
    usuario: '',
    senha: '',
    status: 'inativo'
  };

  constructor(private clienteService: ClienteService, private router: Router) {}

  criarCliente(): void {
    console.log(this.cliente);
    
    this.clienteService.createCliente(this.cliente).subscribe(
      response => {
        alert('Cliente criado com sucesso.');
        this.router.navigate(['/listar-clientes']);
      },
      error => {
        console.error('Erro ao criar cliente:', error);
        alert('Erro ao criar cliente. Verifique os campos e tente novamente.');
      }
    );
  }
}