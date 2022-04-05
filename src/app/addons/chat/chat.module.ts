import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { CdkModule } from 'src/app/shared/cdk/cdk.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ObscenityPipe } from 'src/app/pipes/obscenity.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ObscenityModule } from 'src/app/pipes/obscenity.module';

const routes: Routes = [{ path: '', component: ChatComponent }];
@NgModule({
  declarations: [
    ChatComponent,
    ChatBoxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CdkModule,
    RouterModule.forChild(routes),
    ObscenityModule
  ],
  exports:[
    ChatComponent
  ]
})
export class ChatModule { }
