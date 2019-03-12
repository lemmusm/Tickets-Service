import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallessolicitudComponent } from './detallessolicitud.component';

const routes: Routes = [
  {
    path: '',
    component: DetallessolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallessolicitudRoutingModule {}
