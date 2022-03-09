import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PostCardComponent } from './post-card/post-card.component';
import { CdkModule } from '../cdk/cdk.module';

const components = [
  HeaderComponent,
  FooterComponent,
  PostCardComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    CdkModule,
  ],
  exports:components
})
export class WidgetsModule { }
