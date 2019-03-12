import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';
import { EditarDepartamentoRoutingModule } from './editar-departamento-routing.module';
import { EditarDepartamentoComponent } from './editar-departamento.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [EditarDepartamentoComponent],
  imports: [
    CommonModule,
    EditarDepartamentoRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class EditarDepartamentoModule {}
