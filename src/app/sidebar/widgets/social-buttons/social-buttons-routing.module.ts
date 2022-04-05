import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialButtonsComponent } from './social-buttons.component';

const routes: Routes = [{ path: '', component: SocialButtonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialButtonsRoutingModule { }
