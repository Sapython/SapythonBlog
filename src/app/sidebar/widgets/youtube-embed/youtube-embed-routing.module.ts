import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeEmbedComponent } from './youtube-embed.component';

const routes: Routes = [{ path: '', component: YoutubeEmbedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeEmbedRoutingModule { }
