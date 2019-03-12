import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregardepartamentoComponent } from './agregardepartamento.component';

const routes: Routes = [
  {
    path: '',
    component: AgregardepartamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregardepartamentoRoutingModule {}
