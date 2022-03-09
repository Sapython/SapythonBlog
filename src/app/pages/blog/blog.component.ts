import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { SeoTagsService } from 'src/app/services/seo-tags.service';
declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {
  ngOnInit() {
    console.log('BlogComponent ngOnInit');
    this.srs.getCurrent().subscribe(route => {
      // console.log("Route data ",route);
    })
    this.srs.allRoutes$.forEach((routeList:any) => {
      console.log("Route data ",routeList);
      routeList.forEach((data:any) => {
        if (data.route === window.location.pathname) {
          console.log('Blog route found', data);
          this.metatags.generateTags({
            title: data.title,
            description: data.description,
            image: './assets/images/postImages/'+data.image+'-512.jpg',
            url: './'+data.path,
            type: 'post'
          })
        }
      });
    })
  }

  constructor(private router: Router, private route: ActivatedRoute,private srs:ScullyRoutesService,private metatags:SeoTagsService) {
  }
}
