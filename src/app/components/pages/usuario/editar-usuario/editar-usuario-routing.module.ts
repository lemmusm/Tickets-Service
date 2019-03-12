import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarUsuarioComponent } from './editar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: EditarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarUsuarioRoutingModule {}
