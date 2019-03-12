import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaTicketsRoutingModule } from './lista-tickets-routing.module';
import { ListaTicketsComponent } from './lista-tickets.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from 'src/app/shared.module';
// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ListaTicketsComponent],
  imports: [
    CommonModule,
    ListaTicketsRoutingModule,
    DataTablesModule,
    SharedModule,
    NgbModule
  ]
})
export class ListaTicketsModule {}
