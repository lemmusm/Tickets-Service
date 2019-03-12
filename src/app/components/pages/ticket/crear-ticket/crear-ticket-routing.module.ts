import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearTicketComponent } from './crear-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: CrearTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearTicketRoutingModule {}
