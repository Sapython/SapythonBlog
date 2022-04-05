import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './img/img.component';
import { BtnComponent } from './btn/btn.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { ImgheaderComponent } from './imgheader/imgheader.component';

const components = [ImgComponent,BtnComponent,SpinnerComponent,ImgheaderComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [components]
})
export class CdkModule { }
