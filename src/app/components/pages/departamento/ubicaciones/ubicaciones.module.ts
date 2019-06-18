import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';
import { UbicacionesRoutingModule } from './ubicaciones-routing.module';
import { UbicacionesComponent } from './ubicaciones.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UbicacionesComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    NgbModule, // tooltips
    UbicacionesRoutingModule
  ]
})
export class UbicacionesModule { }
