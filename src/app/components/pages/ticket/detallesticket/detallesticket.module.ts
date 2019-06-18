import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';

import { DetallesticketRoutingModule } from './detallesticket-routing.module';
import { DetallesticketComponent } from './detallesticket.component';
@NgModule({
  declarations: [DetallesticketComponent],
  imports: [
    CommonModule,
    DetallesticketRoutingModule,
    FormsModule
  ]
})
export class DetallesticketModule {}
