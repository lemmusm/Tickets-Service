import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ServiciosComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    NgbModule, // tooltips
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
