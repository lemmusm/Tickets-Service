import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';
import { EditarDepartamentoRoutingModule } from './editar-departamento-routing.module';
import { EditarDepartamentoComponent } from './editar-departamento.component';

@NgModule({
  declarations: [EditarDepartamentoComponent],
  imports: [
    CommonModule,
    EditarDepartamentoRoutingModule,
    FormsModule
  ]
})
export class EditarDepartamentoModule {}
