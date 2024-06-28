import { Cliente } from './../../models/cliente';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  clientes: Cliente[] | undefined;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getAllClientes().subscribe(
      response => {
        this.clientes = response;
      },
      error => {
        console.error('Erro ao listar clientes:', error);
        alert('Erro ao carregar lista de clientes.');
      }
    );
  }
}