import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarDepartamentoComponent } from './editar-departamento.component';

const routes: Routes = [
  {
    path: '',
    component: EditarDepartamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarDepartamentoRoutingModule {}
