import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';

import { EditarTicketAdminRoutingModule } from './editar-ticket-admin-routing.module';
import { EditarTicketAdminComponent } from './editar-ticket-admin.component';
// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [EditarTicketAdminComponent],
  imports: [
    CommonModule,
    EditarTicketAdminRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class EditarTicketAdminModule { }
