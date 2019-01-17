import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { GuardService } from './providers/guard.service';
import { EditarUsuarioComponent } from './components/pages/usuario/editar-usuario/editar-usuario.component';

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
    path: 'editarUsuario',
    component: EditarUsuarioComponent,
    canActivate: [GuardService]
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'login' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
