import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterFeedRoutingModule } from './twitter-feed-routing.module';
import { TwitterFeedComponent } from './twitter-feed.component';


@NgModule({
  declarations: [
    TwitterFeedComponent
  ],
  imports: [
    CommonModule,
    TwitterFeedRoutingModule
  ]
})
export class TwitterFeedModule { }
