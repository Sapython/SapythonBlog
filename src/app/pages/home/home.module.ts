import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    WidgetsModule,
    SwiperModule,
  ]
})
export class HomeModule { }
