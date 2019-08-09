import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetallessolicitudRoutingModule } from './detallessolicitud-routing.module';
import { DetallessolicitudComponent } from './detallessolicitud.component';

@NgModule({
  declarations: [DetallessolicitudComponent],
  imports: [CommonModule, DetallessolicitudRoutingModule, NgbModule]
})
export class DetallessolicitudModule { }
