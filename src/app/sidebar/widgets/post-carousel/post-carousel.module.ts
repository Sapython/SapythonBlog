import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostCarouselRoutingModule } from './post-carousel-routing.module';
import { PostCarouselComponent } from './post-carousel.component';


@NgModule({
  declarations: [
    PostCarouselComponent
  ],
  imports: [
    CommonModule,
    PostCarouselRoutingModule
  ]
})
export class PostCarouselModule { }
