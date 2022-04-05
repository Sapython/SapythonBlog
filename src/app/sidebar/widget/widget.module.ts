import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSubscribeComponent } from './email-subscribe/email-subscribe.component';



@NgModule({
  declarations: [
    EmailSubscribeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[EmailSubscribeComponent]
})
export class WidgetModule { }
