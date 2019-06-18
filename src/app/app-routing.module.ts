import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
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
  // usuarios
  {
    path: 'editar-usuario/:id',
    loadChildren:
      './components/pages/usuario/editar-usuario/editar-usuario.module#EditarUsuarioModule',
    canActivate: [GuardService]
  },
  {
    path: 'admin/editar-usuario/:id',
    loadChildren:
      './components/pages/usuario/editar-usuario-admin/editar-usuario-admin.module#EditarUsuarioAdminModule',
    canActivate: [GuardService]
  },
  {
    path: 'admin/listado-usuarios',
    loadChildren:
      './components/pages/usuario/lista-usuario/lista-usuario.module#ListaUsuarioModule',
    canActivate: [GuardService]
  },
  // roles
  {
    path: 'admin/roles',
    loadChildren:
      './components/pages/usuario/roles/roles.module#RolesModule',
    canActivate: [GuardService]
  },
  {
    path: 'admin/editar-rol/:id',
    loadChildren:
      './components/pages/usuario/editar-rol/editar-rol.module#EditarRolModule',
    canActivate: [GuardService]
  },
  // departamentos
  {
    path: 'admin/listado-departamentos',
    loadChildren:
      './components/pages/departamento/lista-departamento/lista-departamento.module#ListaDepartamentoModule',
    canActivate: [GuardService]
  },
  {
    path: 'admin/agregar-departamento',
    loadChildren:
      './components/pages/departamento/agregardepartamento/agregardepartamento.module#AgregardepartamentoModule',
    canActivate: [GuardService]
  },
  {
    path: 'admin/editar-departamento/:id',
    loadChildren:
      './components/pages/departamento/editar-departamento/editar-departamento.module#EditarDepartamentoModule',
    canActivate: [GuardService]
  },
  // ubicaciones
  {
    path: 'admin/ubicaciones',
    loadChildren:
      './components/pages/departamento/ubicaciones/ubicaciones.module#UbicacionesModule',
    canActivate: [GuardService]
  },
  {
    path: 'admin/editar-ubicacion/:id',
    loadChildren:
      './components/pages/departamento/editar-ubicacion/editar-ubicacion.module#EditarUbicacionModule',
    canActivate: [GuardService]
  },
  // solicitudes
  {
    path: 'admin/listado-tickets',
    loadChildren:
      './components/pages/ticket/lista-tickets/lista-tickets.module#ListaTicketsModule',
    canActivate: [GuardService]
  },
  {
    path: 'admin/atender-ticket/:id',
    loadChildren:
      './components/pages/ticket/editar-ticket-admin/editar-ticket-admin.module#EditarTicketAdminModule',
    canActivate: [GuardService]
  },
  // Detalles solicitud administrador
  {
    path: 'admin/revisar-ticket/:id',
    loadChildren:
      './components/pages/ticket/detallesticket/detallesticket.module#DetallesticketModule',
    canActivate: [GuardService]
  },
  // Detalles solicitud usuario
  {
    path: 'detalle-solicitud/:id',
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
  // servicios
  {
    path: 'admin/servicios',
    loadChildren:
      './components/pages/ticket/servicios/servicios.module#ServiciosModule',
    canActivate: [GuardService]
  },
  {
    path: 'admin/editar-servicio/:id',
    loadChildren:
      './components/pages/ticket/editar-servicio/editar-servicio.module#EditarServicioModule',
    canActivate: [GuardService]
  },
  // estadisticas
  {
    path: 'admin/indicadores',
    loadChildren:
      './components/pages/indicadores/indicadores.module#IndicadoresModule',
    canActivate: [GuardService]
  },
  {
    path: 'admin/estadistica',
    loadChildren:
      './components/pages/estadistica/estadistica.module#EstadisticaModule',
    canActivate: [GuardService]
  },
  {
    path: 'app/version',
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
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
