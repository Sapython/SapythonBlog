import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { WidgetsType } from 'src/app/sidebar/widgets/widgets.structures';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostComponent implements OnInit {
  constructor(private srs: ScullyRoutesService) {}
  postData: any;
  widgets: WidgetsType[] = [
    {
      widget: 'actionButton',
      data: {
        title: 'Subscribe',
        subtitle: 'Subscribe to our newsletter',
        buttonText: 'Subscribe',
        buttonLink: '#',
      },
    },
    {
      widget: 'testimonials',
      data: {
        title: 'Subscribe',
        subtitle: 'Subscribe to our newsletter',
        buttonText: 'Subscribe',
        buttonLink: '#',
      },
    },
    {
      widget: 'subscribe',
      data: {
        title: 'Subscribe',
        subtitle: 'Subscribe to our newsletter',
        buttonText: 'Subscribe',
        buttonLink: '#',
      },
    },
    {
      widget: 'postCarousel',
      data: {
        title: 'Subscribe',
        subtitle: 'Subscribe to our newsletter',
        buttonText: 'Subscribe',
        buttonLink: '#',
      },
    },
  ];
  ngOnInit() {
    this.srs.allRoutes$.forEach((routeList: any) => {
      this.postData = routeList.filter((route: any) =>
        route.route.startsWith(location.pathname)
      )[0];
    });
  }
}
