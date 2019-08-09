import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';
// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetallesticketRoutingModule } from './detallesticket-routing.module';
import { DetallesticketComponent } from './detallesticket.component';
@NgModule({
  declarations: [DetallesticketComponent],
  imports: [
    CommonModule,
    DetallesticketRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class DetallesticketModule { }
