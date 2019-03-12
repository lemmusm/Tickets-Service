import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';

import { DetallesticketRoutingModule } from './detallesticket-routing.module';
import { DetallesticketComponent } from './detallesticket.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [DetallesticketComponent],
  imports: [
    CommonModule,
    DetallesticketRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class DetallesticketModule {}
