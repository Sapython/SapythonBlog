import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { CdkModule } from 'src/app/shared/cdk/cdk.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ObscenityPipe } from 'src/app/pipes/obscenity.pipe';


@NgModule({
  declarations: [
    ChatComponent,
    ChatBoxComponent,
    ObscenityPipe
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CdkModule
  ],
  exports:[
    ChatComponent
  ]
})
export class ChatModule { }
