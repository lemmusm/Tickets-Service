import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarTicketAdminComponent } from './editar-ticket-admin.component';

const routes: Routes = [
  {
    path: '',
    component: EditarTicketAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarTicketAdminRoutingModule {}
