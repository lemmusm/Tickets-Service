import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTicketsComponent } from './lista-tickets.component';

const routes: Routes = [
  {
    path: '',
    component: ListaTicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaTicketsRoutingModule {}
