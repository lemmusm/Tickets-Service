import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarServicioComponent } from './editar-servicio.component';

const routes: Routes = [
  {
    path: '',
    component: EditarServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarServicioRoutingModule { }
