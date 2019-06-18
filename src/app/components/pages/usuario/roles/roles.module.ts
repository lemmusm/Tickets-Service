import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [RolesComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    NgbModule, // tooltips
    RolesRoutingModule
  ]
})
export class RolesModule { }
