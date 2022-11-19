import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisclaimerRoutingModule } from './disclaimer-routing.module';
import { DisclaimerComponent } from './disclaimer.component';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';


@NgModule({
  declarations: [
    DisclaimerComponent
  ],
  imports: [
    CommonModule,
    DisclaimerRoutingModule,
    WidgetsModule
  ]
})
export class DisclaimerModule { }
