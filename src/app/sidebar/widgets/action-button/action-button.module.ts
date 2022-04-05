import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionButtonRoutingModule } from './action-button-routing.module';
import { ActionButtonComponent } from './action-button.component';


@NgModule({
  declarations: [
    ActionButtonComponent
  ],
  imports: [
    CommonModule,
    ActionButtonRoutingModule
  ]
})
export class ActionButtonModule { }
