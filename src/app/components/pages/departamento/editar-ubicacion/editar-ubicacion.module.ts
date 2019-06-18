import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';
import { EditarUbicacionRoutingModule } from './editar-ubicacion-routing.module';
import { EditarUbicacionComponent } from './editar-ubicacion.component';

@NgModule({
  declarations: [EditarUbicacionComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditarUbicacionRoutingModule
  ]
})
export class EditarUbicacionModule { }
