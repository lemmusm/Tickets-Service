import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDepartamentoComponent } from './lista-departamento.component';

const routes: Routes = [
  {
    path: '',
    component: ListaDepartamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaDepartamentoRoutingModule {}
