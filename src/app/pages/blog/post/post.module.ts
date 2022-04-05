import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { CommentsModule } from 'src/app/addons/comments/comments.module';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { CdkModule } from 'src/app/shared/cdk/cdk.module';
import { WidgetModule } from 'src/app/sidebar/widget/widget.module';
import { SidebarWidgetsModule } from 'src/app/sidebar/widgets/widgets.module';

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
    SidebarWidgetsModule,
  ],
})
export class PostModule {}
