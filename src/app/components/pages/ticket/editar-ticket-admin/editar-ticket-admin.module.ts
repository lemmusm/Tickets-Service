import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';

import { EditarTicketAdminRoutingModule } from './editar-ticket-admin-routing.module';
import { EditarTicketAdminComponent } from './editar-ticket-admin.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [EditarTicketAdminComponent],
  imports: [
    CommonModule,
    EditarTicketAdminRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class EditarTicketAdminModule {}
