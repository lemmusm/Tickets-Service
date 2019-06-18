import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaUsuarioRoutingModule } from './lista-usuario-routing.module';
import { ListaUsuarioComponent } from './lista-usuario.component';
import { DataTablesModule } from 'angular-datatables';
// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ListaUsuarioComponent],
  imports: [
    CommonModule,
    ListaUsuarioRoutingModule,
    DataTablesModule,
    NgbModule
  ]
})
export class ListaUsuarioModule {}
