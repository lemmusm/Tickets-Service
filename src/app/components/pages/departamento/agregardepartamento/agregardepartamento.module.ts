import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';

import { AgregardepartamentoRoutingModule } from './agregardepartamento-routing.module';
import { AgregardepartamentoComponent } from './agregardepartamento.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [AgregardepartamentoComponent],
  imports: [
    CommonModule,
    AgregardepartamentoRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AgregardepartamentoModule {}
