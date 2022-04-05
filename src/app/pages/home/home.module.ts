import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { SwiperModule } from 'swiper/angular';
import { CdkModule } from 'src/app/shared/cdk/cdk.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    WidgetsModule,
    SwiperModule,
    CdkModule
  ]
})
export class HomeModule { }
