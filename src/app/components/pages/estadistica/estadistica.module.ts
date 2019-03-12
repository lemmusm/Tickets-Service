import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticaRoutingModule } from './estadistica-routing.module';
import { EstadisticaComponent } from './estadistica.component';
import { SharedModule } from 'src/app/shared.module';
import { ServiciosComponent } from '../../shared/charts/servicios/servicios.component';
import { StatusComponent } from '../../shared/charts/status/status.component';
import { DepartamentosComponent } from '../../shared/charts/departamentos/departamentos.component';
import { EstadisticasFechasComponent } from '../../shared/charts/estadisticas-fechas/estadisticas-fechas.component';
import { FormsModule } from '@angular/forms';
import {
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule
} from '@angular/material';

@NgModule({
  declarations: [
    EstadisticaComponent,
    ServiciosComponent,
    StatusComponent,
    DepartamentosComponent,
    EstadisticasFechasComponent
  ],
  imports: [
    CommonModule,
    EstadisticaRoutingModule,
    SharedModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [MatDatepickerModule]
})
export class EstadisticaModule {}
