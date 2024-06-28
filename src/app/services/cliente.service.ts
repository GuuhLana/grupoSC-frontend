import { Cliente } from './../models/cliente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = "http://localhost:8080/clientes";

  constructor(private http: HttpClient) {}

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/cadastrar`, cliente).pipe(
      catchError(this.handleError)
    );
  }

  updateCliente(cnpj: string, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/${cnpj}`, cliente);
  }

  deleteCliente(cnpj: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cnpj}`);
  }

  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  getClientesByRazaoSocial(razaoSocial: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/search`, { params: { razaoSocial } });
  }

  getClienteByCnpj(cnpj: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${cnpj}`);
  }

  login(usuario: string, senha: string): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/login`, null, {
      params: { usuario, senha }
    });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
