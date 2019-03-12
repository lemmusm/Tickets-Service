import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenucontrolpanelComponent } from './components/shared/menucontrolpanel/menucontrolpanel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenucontrolpanelComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenucontrolpanelComponent]
})
export class SharedModule {}
