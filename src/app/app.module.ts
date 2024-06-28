import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CriarClienteComponent } from './components/criar-cliente/criar-cliente.component';
import { ExcluirClienteComponent } from './components/excluir-cliente/excluir-cliente.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { BuscarClienteComponent } from './components/buscar-cliente/buscar-cliente.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CriarClienteComponent,
    ExcluirClienteComponent,
    ListarClientesComponent,
    BuscarClienteComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
