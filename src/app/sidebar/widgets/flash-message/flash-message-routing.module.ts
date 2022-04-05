import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessageComponent } from './flash-message.component';

const routes: Routes = [{ path: '', component: FlashMessageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashMessageRoutingModule { }
