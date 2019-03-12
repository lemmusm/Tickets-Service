import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallessolicitudRoutingModule } from './detallessolicitud-routing.module';
import { DetallessolicitudComponent } from './detallessolicitud.component';

@NgModule({
  declarations: [DetallessolicitudComponent],
  imports: [CommonModule, DetallessolicitudRoutingModule]
})
export class DetallessolicitudModule {}
