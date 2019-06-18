import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { IndicadoresComponent } from './indicadores.component';
import { FormsModule } from '@angular/forms';
import {
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule
} from '@angular/material';

@NgModule({
  declarations: [IndicadoresComponent],
  imports: [
    CommonModule,
    IndicadoresRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [MatDatepickerModule]
})
export class IndicadoresModule { }
