import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { CommentService } from './services/comment.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkModule } from 'src/app/shared/cdk/cdk.module';
import { RouterModule, Routes } from '@angular/router';
import { ObscenityModule } from 'src/app/pipes/obscenity.module';

const routes: Routes = [{ path: '', component: CommentsComponent }];

@NgModule({
  declarations: [
    CommentsComponent,
    CommentBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CdkModule,
    ObscenityModule
  ],
  providers:[
    CommentService
  ],
  exports:[
    CommentsComponent
  ]
})
export class CommentsModule { }
