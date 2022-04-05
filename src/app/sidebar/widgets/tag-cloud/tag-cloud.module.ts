import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagCloudRoutingModule } from './tag-cloud-routing.module';
import { TagCloudComponent } from './tag-cloud.component';


@NgModule({
  declarations: [
    TagCloudComponent
  ],
  imports: [
    CommonModule,
    TagCloudRoutingModule
  ]
})
export class TagCloudModule { }
