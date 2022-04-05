import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCarouselComponent } from './post-carousel.component';

const routes: Routes = [{ path: '', component: PostCarouselComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostCarouselRoutingModule { }
