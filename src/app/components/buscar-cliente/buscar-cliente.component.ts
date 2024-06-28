import { Cliente } from './../../models/cliente';
import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent {
  cnpj!: string;
  cliente: Cliente | undefined;

  constructor(private clienteService: ClienteService) {}

  buscarCliente(): void {
    this.clienteService.getClienteByCnpj(this.cnpj).subscribe(
      response => {
        this.cliente = response;
      },
      error => {
        console.error('Erro ao buscar cliente:', error);
        alert('Cliente não encontrado. Verifique o CNPJ e tente novamente.');
        this.cliente = undefined; // Atribui undefined ao invés de null
      }
    );
  }
}