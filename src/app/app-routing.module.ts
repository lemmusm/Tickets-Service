import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { GuardService } from './providers/guard.service';
import { EditarUsuarioComponent } from './components/pages/usuario/editar-usuario/editar-usuario.component';
import { ListaUsuarioComponent } from './components/pages/usuario/lista-usuario/lista-usuario.component';
import { ControlpanelComponent } from './components/pages/controlpanel/controlpanel.component';

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
    component: EditarUsuarioComponent,
    canActivate: [GuardService]
  },
  {
    path: 'listado-usuarios',
    component: ListaUsuarioComponent,
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
