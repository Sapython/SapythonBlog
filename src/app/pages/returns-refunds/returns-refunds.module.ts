import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnsRefundsRoutingModule } from './returns-refunds-routing.module';
import { ReturnsRefundsComponent } from './returns-refunds.component';


@NgModule({
  declarations: [
    ReturnsRefundsComponent
  ],
  imports: [
    CommonModule,
    ReturnsRefundsRoutingModule
  ]
})
export class ReturnsRefundsModule { }
