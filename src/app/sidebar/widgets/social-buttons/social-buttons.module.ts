import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialButtonsRoutingModule } from './social-buttons-routing.module';
import { SocialButtonsComponent } from './social-buttons.component';


@NgModule({
  declarations: [
    SocialButtonsComponent
  ],
  imports: [
    CommonModule,
    SocialButtonsRoutingModule
  ]
})
export class SocialButtonsModule { }
