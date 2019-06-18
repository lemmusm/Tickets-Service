import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDepartamentoRoutingModule } from './lista-departamento-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { ListaDepartamentoComponent } from './lista-departamento.component';
// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ListaDepartamentoComponent],
  imports: [
    CommonModule,
    ListaDepartamentoRoutingModule,
    DataTablesModule,
    NgbModule // tooltips
  ]
})
export class ListaDepartamentoModule {}
