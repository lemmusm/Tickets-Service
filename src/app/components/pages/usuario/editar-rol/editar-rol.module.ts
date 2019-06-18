import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarRolRoutingModule } from './editar-rol-routing.module';
import { EditarRolComponent } from './editar-rol.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarRolComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditarRolRoutingModule
  ]
})
export class EditarRolModule { }
