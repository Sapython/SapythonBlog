import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeEmbedRoutingModule } from './youtube-embed-routing.module';
import { YoutubeEmbedComponent } from './youtube-embed.component';


@NgModule({
  declarations: [
    YoutubeEmbedComponent
  ],
  imports: [
    CommonModule,
    YoutubeEmbedRoutingModule
  ]
})
export class YoutubeEmbedModule { }
