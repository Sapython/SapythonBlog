import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightService } from 'src/app/addons/codeHiglight/services/highlight.service';
import { CdkModule } from 'src/app/shared/cdk/cdk.module';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, CdkModule, WidgetsModule],
  providers:[HighlightService]
})
export class BlogModule {}
