import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { GuardService } from './providers/guard.service';

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
    path: 'editarUsuario/:id',
    loadChildren:
      './components/pages/usuario/editar-usuario/editar-usuario.module#EditarUsuarioModule',
    canActivate: [GuardService]
  },
  {
    path: 'editarUsuarioAdmin/:id',
    loadChildren:
      './components/pages/usuario/editar-usuario-admin/editar-usuario-admin.module#EditarUsuarioAdminModule',
    canActivate: [GuardService]
  },
  {
    path: 'listado-usuarios',
    loadChildren:
      './components/pages/usuario/lista-usuario/lista-usuario.module#ListaUsuarioModule',
    canActivate: [GuardService]
  },
  {
    path: 'listado-departamentos',
    loadChildren:
      './components/pages/departamento/lista-departamento/lista-departamento.module#ListaDepartamentoModule',
    canActivate: [GuardService]
  },
  {
    path: 'agregar-departamento',
    loadChildren:
      './components/pages/departamento/agregardepartamento/agregardepartamento.module#AgregardepartamentoModule',
    canActivate: [GuardService]
  },
  {
    path: 'editarDepartamento/:id',
    loadChildren:
      './components/pages/departamento/editar-departamento/editar-departamento.module#EditarDepartamentoModule',
    canActivate: [GuardService]
  },
  {
    path: 'listado-tickets',
    loadChildren:
      './components/pages/ticket/lista-tickets/lista-tickets.module#ListaTicketsModule',
    canActivate: [GuardService]
  },
  {
    path: 'editarTicketAdmin/:id',
    loadChildren:
      './components/pages/ticket/editar-ticket-admin/editar-ticket-admin.module#EditarTicketAdminModule',
    canActivate: [GuardService]
  },
  // Detalles solicitud administrador
  {
    path: 'detalles-ticket/:id',
    loadChildren:
      './components/pages/ticket/detallesticket/detallesticket.module#DetallesticketModule',
    canActivate: [GuardService]
  },
  // Detalles solicitud usuario
  {
    path: 'detalles-solicitud/:id',
    loadChildren:
      './components/pages/detallessolicitud/detallessolicitud.module#DetallessolicitudModule',
    canActivate: [GuardService]
  },
  {
    path: 'crear-ticket',
    loadChildren:
      './components/pages/ticket/crear-ticket/crear-ticket.module#CrearTicketModule',
    canActivate: [GuardService]
  },
  {
    path: 'estadistica',
    loadChildren:
      './components/pages/estadistica/estadistica.module#EstadisticaModule',
    canActivate: [GuardService]
  },
  {
    path: 'changelogs',
    loadChildren:
      './components/pages/changelog/changelog.module#ChangelogModule',
    canActivate: [GuardService]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
