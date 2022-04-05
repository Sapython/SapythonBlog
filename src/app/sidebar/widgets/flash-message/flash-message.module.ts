import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashMessageRoutingModule } from './flash-message-routing.module';
import { FlashMessageComponent } from './flash-message.component';


@NgModule({
  declarations: [
    FlashMessageComponent
  ],
  imports: [
    CommonModule,
    FlashMessageRoutingModule
  ]
})
export class FlashMessageModule { }
