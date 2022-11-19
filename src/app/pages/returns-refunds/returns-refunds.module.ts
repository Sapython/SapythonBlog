import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnsRefundsRoutingModule } from './returns-refunds-routing.module';
import { ReturnsRefundsComponent } from './returns-refunds.component';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';


@NgModule({
  declarations: [
    ReturnsRefundsComponent
  ],
  imports: [
    CommonModule,
    ReturnsRefundsRoutingModule,
    WidgetsModule
  ]
})
export class ReturnsRefundsModule { }
