import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';

import { AgregardepartamentoRoutingModule } from './agregardepartamento-routing.module';
import { AgregardepartamentoComponent } from './agregardepartamento.component';
@NgModule({
  declarations: [AgregardepartamentoComponent],
  imports: [
    CommonModule,
    AgregardepartamentoRoutingModule,
    FormsModule
  ]
})
export class AgregardepartamentoModule {}
