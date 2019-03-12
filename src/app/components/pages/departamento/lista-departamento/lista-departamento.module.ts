import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDepartamentoRoutingModule } from './lista-departamento-routing.module';
import { MenucontrolpanelComponent } from 'src/app/components/shared/menucontrolpanel/menucontrolpanel.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from 'src/app/shared.module';
import { ListaDepartamentoComponent } from './lista-departamento.component';
// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ListaDepartamentoComponent],
  imports: [
    CommonModule,
    ListaDepartamentoRoutingModule,
    DataTablesModule,
    SharedModule,
    NgbModule // tooltips
  ]
})
export class ListaDepartamentoModule {}
