import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';

import { EditarUsuarioAdminRoutingModule } from './editar-usuario-admin-routing.module';
import { EditarUsuarioAdminComponent } from './editar-usuario-admin.component';
@NgModule({
  declarations: [EditarUsuarioAdminComponent],
  imports: [
    CommonModule,
    EditarUsuarioAdminRoutingModule,
    FormsModule
  ]
})
export class EditarUsuarioAdminModule {}
