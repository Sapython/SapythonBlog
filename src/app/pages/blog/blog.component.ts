import {AfterViewChecked, Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { SeoTagsService } from 'src/app/services/seo-tags.service';
declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private srs:ScullyRoutesService,private metaTags:SeoTagsService) {
  }
  posts:any[] = []
  // Defaults
  authorName:string = "John Doe";
  authorImage:string = 'Kumar Saptam';
  featuredImage:string = "featuredImage";
  imageAlt = 'Image Alt';
  dateTime = "2020-01-01T00:00:00.000Z";
  title:string = 'This is the additional title for blog';
  excerpt:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nibh nisi, tincidunt vel facilisis pretium, varius dignissim magna. '
  route:string="";
  screenHeight:number = window.innerHeight;
  tags:any[] = []
  routeDefined:boolean = false;
  ngOnInit() {
    console.log('BlogComponent ngOnInit');
    this.srs.getCurrent().subscribe(route => {
      // console.log("Route data ",route);
    })
    this.srs.allRoutes$.forEach((routeList:any) => {
      console.log("Route data ",routeList);
      this.posts = routeList.filter((route:any) => route.route.startsWith('/blog/'))
      console.log(this.posts)
      this.authorName = this.posts[0].authorName;
      this.authorImage = this.posts[0].authorImage;
      this.featuredImage = this.posts[0].featuredImage;
      this.imageAlt = this.posts[0].title;
      this.dateTime = new Date(this.posts[0].date).toLocaleDateString();
      this.title = this.posts[0].title;
      this.excerpt = this.posts[0].description;
      this.tags = this.posts[0].tags;
      this.route = this.posts[0].route;
      this.routeDefined = true;
      this.posts.splice(0,1);
      routeList.forEach((data:any) => {
        if (data.route === window.location.pathname) {
          console.log('Blog route found', data);
          this.metaTags.generateTags({
            title: data.title,
            description: data.description,
            image: './assets/images/postImages/'+data.image+'-512.jpg',
            url: './'+data.route.replace('/blog/',''),
            type: 'post'
          })
        }
      });
    })
  }
  genGrid(len:number){
    return [...Array(len).keys()]
  }
  getLocaleDate(date:string){
    return new Date(date).toLocaleDateString();
  }
  
}
