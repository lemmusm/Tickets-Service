import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
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
      './components/pages/usuario/editar-usuario/editar-usuario.module#EditarUsuarioModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/editar-usuario/:id',
    loadChildren:
      './components/pages/usuario/editar-usuario-admin/editar-usuario-admin.module#EditarUsuarioAdminModule',
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/listado-usuarios',
    loadChildren:
      './components/pages/usuario/lista-usuario/lista-usuario.module#ListaUsuarioModule',
    canActivate: [AuthGuard, RolGuard]
  },
  // roles
  {
    path: 'admin/roles',
    loadChildren:
      './components/pages/usuario/roles/roles.module#RolesModule',
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/editar-rol/:id',
    loadChildren:
      './components/pages/usuario/editar-rol/editar-rol.module#EditarRolModule',
    canActivate: [AuthGuard, RolGuard]
  },
  // departamentos
  {
    path: 'admin/listado-departamentos',
    loadChildren:
      './components/pages/departamento/lista-departamento/lista-departamento.module#ListaDepartamentoModule',
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/agregar-departamento',
    loadChildren:
      './components/pages/departamento/agregardepartamento/agregardepartamento.module#AgregardepartamentoModule',
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/editar-departamento/:id',
    loadChildren:
      './components/pages/departamento/editar-departamento/editar-departamento.module#EditarDepartamentoModule',
    canActivate: [AuthGuard, RolGuard]
  },
  // ubicaciones
  {
    path: 'admin/ubicaciones',
    loadChildren:
      './components/pages/departamento/ubicaciones/ubicaciones.module#UbicacionesModule',
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/editar-ubicacion/:id',
    loadChildren:
      './components/pages/departamento/editar-ubicacion/editar-ubicacion.module#EditarUbicacionModule',
    canActivate: [AuthGuard, RolGuard]
  },
  // solicitudes
  {
    path: 'admin/listado-tickets',
    loadChildren:
      './components/pages/ticket/lista-tickets/lista-tickets.module#ListaTicketsModule',
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/atender-ticket/:id',
    loadChildren:
      './components/pages/ticket/editar-ticket-admin/editar-ticket-admin.module#EditarTicketAdminModule',
    canActivate: [AuthGuard, RolGuard]
  },
  // Detalles solicitud administrador
  {
    path: 'admin/revisar-ticket/:id',
    loadChildren:
      './components/pages/ticket/detallesticket/detallesticket.module#DetallesticketModule',
    canActivate: [AuthGuard, RolGuard]
  },
  // Detalles solicitud usuario
  {
    path: 'detalle-solicitud/:id',
    loadChildren:
      './components/pages/detallessolicitud/detallessolicitud.module#DetallessolicitudModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'crear-ticket',
    loadChildren:
      './components/pages/ticket/crear-ticket/crear-ticket.module#CrearTicketModule',
    canActivate: [AuthGuard]
  },
  // servicios
  {
    path: 'admin/servicios',
    loadChildren:
      './components/pages/ticket/servicios/servicios.module#ServiciosModule',
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/editar-servicio/:id',
    loadChildren:
      './components/pages/ticket/editar-servicio/editar-servicio.module#EditarServicioModule',
    canActivate: [AuthGuard, RolGuard]
  },
  // estadisticas
  {
    path: 'admin/indicadores',
    loadChildren:
      './components/pages/indicadores/indicadores.module#IndicadoresModule',
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'admin/estadistica',
    loadChildren:
      './components/pages/estadistica/estadistica.module#EstadisticaModule',
    canActivate: [AuthGuard, RolGuard]
  },
  {
    path: 'app/version',
    loadChildren:
      './components/pages/changelog/changelog.module#ChangelogModule',
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
