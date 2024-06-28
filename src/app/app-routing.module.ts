import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { CriarClienteComponent } from './components/criar-cliente/criar-cliente.component';
import { ExcluirClienteComponent } from './components/excluir-cliente/excluir-cliente.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { BuscarClienteComponent } from './components/buscar-cliente/buscar-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'criar-cliente', component: CriarClienteComponent },
  { path: 'excluir-cliente', component: ExcluirClienteComponent },
  { path: 'listar-clientes', component: ListarClientesComponent },
  { path: 'buscar-cliente', component: BuscarClienteComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
