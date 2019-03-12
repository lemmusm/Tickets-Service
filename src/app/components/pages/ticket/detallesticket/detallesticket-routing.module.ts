import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesticketComponent } from './detallesticket.component';

const routes: Routes = [
  {
    path: '',
    component: DetallesticketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesticketRoutingModule {}
