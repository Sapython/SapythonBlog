import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';


@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    WidgetsModule
  ]
})
export class FaqsModule { }
