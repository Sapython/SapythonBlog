import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { CdkModule } from 'src/app/shared/cdk/cdk.module';
import { LottieServerModuleModule } from 'src/app/shared/modules/lottie-server-module/lottie-server-module.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    WidgetsModule,
    CdkModule,
    LottieServerModuleModule
  ]
})
export class HomeModule { }
