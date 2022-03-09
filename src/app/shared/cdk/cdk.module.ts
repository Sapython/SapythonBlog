import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './img/img.component';

const components = [ImgComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class CdkModule { }
