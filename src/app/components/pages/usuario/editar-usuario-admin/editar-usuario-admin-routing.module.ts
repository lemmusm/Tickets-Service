import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarUsuarioAdminComponent } from './editar-usuario-admin.component';

const routes: Routes = [
  {
    path: '',
    component: EditarUsuarioAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarUsuarioAdminRoutingModule {}
