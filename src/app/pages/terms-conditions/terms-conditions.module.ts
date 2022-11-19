import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionsRoutingModule } from './terms-conditions-routing.module';
import { TermsConditionsComponent } from './terms-conditions.component';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';


@NgModule({
  declarations: [
    TermsConditionsComponent
  ],
  imports: [
    CommonModule,
    TermsConditionsRoutingModule,
    WidgetsModule
  ]
})
export class TermsConditionsModule { }
