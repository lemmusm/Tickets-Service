import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaUsuarioRoutingModule } from './lista-usuario-routing.module';
import { ListaUsuarioComponent } from './lista-usuario.component';
import { SharedModule } from 'src/app/shared.module';
import { DataTablesModule } from 'angular-datatables';
// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ListaUsuarioComponent],
  imports: [
    CommonModule,
    ListaUsuarioRoutingModule,
    DataTablesModule,
    SharedModule,
    NgbModule
  ]
})
export class ListaUsuarioModule {}
