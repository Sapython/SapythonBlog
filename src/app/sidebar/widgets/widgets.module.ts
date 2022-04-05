import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets.component';
// import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WidgetsComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
  ],
  exports:[WidgetsComponent]
})
export class SidebarWidgetsModule { }
