import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwitterFeedComponent } from './twitter-feed.component';

const routes: Routes = [{ path: '', component: TwitterFeedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwitterFeedRoutingModule { }
