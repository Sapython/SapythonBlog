import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagCloudComponent } from './tag-cloud.component';

const routes: Routes = [{ path: '', component: TagCloudComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagCloudRoutingModule { }
