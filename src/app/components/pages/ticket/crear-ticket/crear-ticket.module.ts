import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';

import { CrearTicketRoutingModule } from './crear-ticket-routing.module';
import { CrearTicketComponent } from './crear-ticket.component';

@NgModule({
  declarations: [CrearTicketComponent],
  imports: [CommonModule, CrearTicketRoutingModule, FormsModule]
})
export class CrearTicketModule {}
