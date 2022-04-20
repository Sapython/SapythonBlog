import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { CommentsModule } from 'src/app/addons/comments/comments.module';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { CdkModule } from 'src/app/shared/cdk/cdk.module';
import { SidebarWidgetsModule } from 'src/app/sidebar/widgets/widgets.module';
import { PostService } from 'src/app/services/post.service';
@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    WidgetsModule,
    CommentsModule,
    ScullyLibModule,
    CdkModule,
    // WidgetModule,
    SidebarWidgetsModule
  ],
  providers:[PostService]
})
export class PostModule {}
