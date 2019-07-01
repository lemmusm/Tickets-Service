import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { RolGuard } from './guards/rol.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  // usuarios
  {
    path: 'editar-usuario/:id',
    loadChildren:
      () => import('./components/pages/usuario/editar-usuario/editar-usuario.module').then(m => m.EditarUsuarioModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/editar-usuario/:id',
    loadChildren:
      () => import('./components/pages/usuario/editar-usuario-admin/editar-usuario-admin.module').then(m => m.EditarUsuarioAdminModule),
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/listado-usuarios',
    loadChildren:
      () => import('./components/pages/usuario/lista-usuario/lista-usuario.module').then(m => m.ListaUsuarioModule),
    canActivate: [AuthGuard, RolGuard]
  },
  // roles
  {
    path: 'admin/roles',
    loadChildren:
      () => import('./components/pages/usuario/roles/roles.module').then(m => m.RolesModule),
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/editar-rol/:id',
    loadChildren:
      () => import('./components/pages/usuario/editar-rol/editar-rol.module').then(m => m.EditarRolModule),
    canActivate: [AuthGuard, RolGuard]
  },
  // departamentos
  {
    path: 'admin/listado-departamentos',
    loadChildren:
      () => import('./components/pages/departamento/lista-departamento/lista-departamento.module').then(m => m.ListaDepartamentoModule),
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/agregar-departamento',
    loadChildren:
      () => import('./components/pages/departamento/agregardepartamento/agregardepartamento.module').then(m => m.AgregardepartamentoModule),
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/editar-departamento/:id',
    loadChildren:
      () => import('./components/pages/departamento/editar-departamento/editar-departamento.module').then(m => m.EditarDepartamentoModule),
    canActivate: [AuthGuard, RolGuard]
  },
  // ubicaciones
  {
    path: 'admin/ubicaciones',
    loadChildren:
      () => import('./components/pages/departamento/ubicaciones/ubicaciones.module').then(m => m.UbicacionesModule),
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/editar-ubicacion/:id',
    loadChildren:
      () => import('./components/pages/departamento/editar-ubicacion/editar-ubicacion.module').then(m => m.EditarUbicacionModule),
    canActivate: [AuthGuard, RolGuard]
  },
  // solicitudes
  {
    path: 'admin/listado-tickets',
    loadChildren:
      () => import('./components/pages/ticket/lista-tickets/lista-tickets.module').then(m => m.ListaTicketsModule),
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/atender-ticket/:id',
    loadChildren:
      () => import('./components/pages/ticket/editar-ticket-admin/editar-ticket-admin.module').then(m => m.EditarTicketAdminModule),
    canActivate: [AuthGuard, RolGuard]
  },
  // Detalles solicitud administrador
  {
    path: 'admin/revisar-ticket/:id',
    loadChildren:
      () => import('./components/pages/ticket/detallesticket/detallesticket.module').then(m => m.DetallesticketModule),
    canActivate: [AuthGuard, RolGuard]
  },
  // Detalles solicitud usuario
  {
    path: 'detalle-solicitud/:id',
    loadChildren:
      () => import('./components/pages/detallessolicitud/detallessolicitud.module').then(m => m.DetallessolicitudModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'crear-ticket',
    loadChildren:
      () => import('./components/pages/ticket/crear-ticket/crear-ticket.module').then(m => m.CrearTicketModule),
    canActivate: [AuthGuard]
  },
  // servicios
  {
    path: 'admin/servicios',
    loadChildren:
      () => import('./components/pages/ticket/servicios/servicios.module').then(m => m.ServiciosModule),
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/editar-servicio/:id',
    loadChildren:
      () => import('./components/pages/ticket/editar-servicio/editar-servicio.module').then(m => m.EditarServicioModule),
    canActivate: [AuthGuard, RolGuard]
  },
  // estadisticas
  {
    path: 'admin/indicadores',
    loadChildren:
      () => import('./components/pages/indicadores/indicadores.module').then(m => m.IndicadoresModule),
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/estadistica',
    loadChildren:
      () => import('./components/pages/estadistica/estadistica.module').then(m => m.EstadisticaModule),
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'app/version',
    loadChildren:
      () => import('./components/pages/changelog/changelog.module').then(m => m.ChangelogModule),
    canActivate: [AuthGuard, RolGuard]
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
export class AppRoutingModule { }
