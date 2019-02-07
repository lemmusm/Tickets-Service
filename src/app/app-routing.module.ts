import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { GuardService } from './providers/guard.service';
import { EditarUsuarioComponent } from './components/pages/usuario/editar-usuario/editar-usuario.component';
import { ListaUsuarioComponent } from './components/pages/usuario/lista-usuario/lista-usuario.component';
import { ControlpanelComponent } from './components/pages/controlpanel/controlpanel.component';
import { ListaDepartamentoComponent } from './components/pages/departamento/lista-departamento/lista-departamento.component';
import { EditarDepartamentoComponent } from './components/pages/departamento/editar-departamento/editar-departamento.component';
import { AgregardepartamentoComponent } from './components/pages/departamento/agregardepartamento/agregardepartamento.component';
import { ListaTicketsComponent } from './components/pages/ticket/lista-tickets/lista-tickets.component';
import { EditarTicketComponent } from './components/pages/ticket/editar-ticket/editar-ticket.component';
import { EditarTicketAdminComponent } from './components/pages/ticket/editar-ticket-admin/editar-ticket-admin.component';
import { EditarUsuarioAdminComponent } from './components/pages/usuario/editar-usuario-admin/editar-usuario-admin.component';
import { CrearTicketComponent } from './components/pages/ticket/crear-ticket/crear-ticket.component';
import { HistorialComponent } from './components/pages/historial/historial.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardService]
  },
  {
    path: 'historial',
    component: HistorialComponent,
    canActivate: [GuardService]
  },
  {
    path: 'editarUsuario/:id',
    component: EditarUsuarioComponent,
    canActivate: [GuardService]
  },
  {
    path: 'editarUsuarioAdmin/:id',
    component: EditarUsuarioAdminComponent,
    canActivate: [GuardService]
  },
  {
    path: 'listado-usuarios',
    component: ListaUsuarioComponent,
    canActivate: [GuardService]
  },
  {
    path: 'listado-departamentos',
    component: ListaDepartamentoComponent,
    canActivate: [GuardService]
  },
  {
    path: 'agregar-departamento',
    component: AgregardepartamentoComponent,
    canActivate: [GuardService]
  },
  {
    path: 'editarDepartamento/:id',
    component: EditarDepartamentoComponent,
    canActivate: [GuardService]
  },
  {
    path: 'listado-tickets',
    component: ListaTicketsComponent,
    canActivate: [GuardService]
  },
  {
    path: 'editarTicketAdmin/:id',
    component: EditarTicketAdminComponent,
    canActivate: [GuardService]
  },
  {
    path: 'crear-ticket',
    component: CrearTicketComponent,
    canActivate: [GuardService]
  },
  {
    path: 'control-panel',
    component: ControlpanelComponent,
    canActivate: [GuardService]
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
