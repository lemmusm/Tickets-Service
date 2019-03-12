import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule
import { FormsModule } from '@angular/forms';

import { EditarUsuarioRoutingModule } from './editar-usuario-routing.module';
import { EditarUsuarioComponent } from './editar-usuario.component';

@NgModule({
  declarations: [EditarUsuarioComponent],
  imports: [CommonModule, EditarUsuarioRoutingModule, FormsModule]
})
export class EditarUsuarioModule {}
