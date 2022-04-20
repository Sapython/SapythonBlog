import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PostCardComponent } from './post-card/post-card.component';
import { CdkModule } from '../cdk/cdk.module';
import { PostCardWideComponent } from './post-card-wide/post-card-wide.component';
import { KeyboardShortcutsModule }     from 'ng-keyboard-shortcuts';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';

const components = [
  HeaderComponent,
  FooterComponent,
  PostCardComponent,
  PostCardWideComponent,
  LikeDislikeComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    CdkModule,
    ReactiveFormsModule,
    FormsModule,
    KeyboardShortcutsModule.forRoot(),
  ],
  exports:components
})
export class WidgetsModule { }
