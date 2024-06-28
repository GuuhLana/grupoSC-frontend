import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-excluir-cliente',
  templateUrl: './excluir-cliente.component.html',
  styleUrls: ['./excluir-cliente.component.css']
})
export class ExcluirClienteComponent {
  cnpj!: string;

  constructor(private clienteService: ClienteService) {}

  excluirCliente(): void {
    if (confirm('Tem certeza que deseja excluir o cliente?')) {
      this.clienteService.deleteCliente(this.cnpj).subscribe(
        () => {
          alert('Cliente excluído com sucesso.');
          this.cnpj = '';
        },
        error => {
          console.error('Erro ao excluir cliente:', error);
          alert('Erro ao excluir cliente. Verifique o CNPJ e tente novamente.');
        }
      );
    }
  }
}
