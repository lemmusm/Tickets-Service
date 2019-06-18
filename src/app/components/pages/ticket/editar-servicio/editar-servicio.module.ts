import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarServicioRoutingModule } from './editar-servicio-routing.module';
import { EditarServicioComponent } from './editar-servicio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarServicioComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditarServicioRoutingModule
  ]
})
export class EditarServicioModule { }
