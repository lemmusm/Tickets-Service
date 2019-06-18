import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticaRoutingModule } from './estadistica-routing.module';
import { EstadisticaComponent } from './estadistica.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EstadisticaComponent
  ],
  imports: [
    CommonModule,
    EstadisticaRoutingModule, FormsModule]
})
export class EstadisticaModule {}
