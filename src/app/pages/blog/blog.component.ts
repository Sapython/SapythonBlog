import {AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { SeoTagsService } from 'src/app/services/seo-tags.service';
import anime from 'animejs/lib/anime.es';
import { slideInAnimation } from 'src/app/animations/route.animation';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations:[slideInAnimation]
})
export class BlogComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private srs:ScullyRoutesService,private metaTags:SeoTagsService) {
  }
  posts:any[] = []
  timer = ms => new Promise(res => setTimeout(res, ms))
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
  postLayouts:any[] = [
    {
      name:'twoImageTwoText',
      postNumber:4,
      stackNumber:1
    },
    {
      name:'FourHorizontal',
      postNumber:4,
      stackNumber:1
    },
    {
      name:'twoTextOneImage',
      postNumber:3,
      stackNumber:1
    },
    {
      name:'threeHorizontal',
      postNumber:3,
      stackNumber:1
    },
    {
      name:'widePostCard',
      postNumber:1,
      stackNumber:1
    }
  ]
  ngOnInit() {
    console.log('BlogComponent ngOnInit');
    this.srs.getCurrent().subscribe(route => {
      // console.log("Route data ",route);
    })
    this.srs.allRoutes$.forEach((routeList:any) => {
      // console.log("Route data ",routeList);
      this.posts = routeList.filter((route:any) => route.route.startsWith('/blog/'))
      // console.log(this.posts)
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
  async ngAfterViewInit(): Promise<void> {
    // this.generateLayout(this.posts.length);
    // function genRandom(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // console.log(this.sortLayout(this.postLayouts));
    // for (let index = 0; index < 20; index++) {
    //   let layout = 
    //   [
    //     {
    //       name:'twoImageTwoText',
    //       postNumber:genRandom(1,50),
    //       stackNumber:genRandom(-1,-50)
    //     },
    //     {
    //       name:'FourHorizontal',
    //       postNumber:genRandom(1,50),
    //       stackNumber:genRandom(-1,-50)
    //     },
    //     {
    //       name:'twoTextOneImage',
    //       postNumber:genRandom(1,50),
    //       stackNumber:genRandom(-1,-50)
    //     },
    //     {
    //       name:'threeHorizontal',
    //       postNumber:genRandom(1,50),
    //       stackNumber:genRandom(-1,-50)
    //     },
    //     {
    //       name:'widePostCard',
    //       postNumber:genRandom(1,50),
    //       stackNumber:genRandom(-1,-50)
    //     }
    //   ]
    //   // console.log('Sorted',layout,this.sortLayout(layout));
    //   // console.log('-----------------------')
    //   // this.sortLayout(layout).forEach((data:any)=>{
    //   //   console.log('Sorted',data.postNumber,data.stackNumber,data.postNumber+data.stackNumber);
    //   //   // this.setLayout(data);
    //   // })
    //   // await this.timer(3000);
    // }
    
    setTimeout(()=>{console.log('NUM',this.posts.length);this.generateLayout(this.posts.length-4);},5000)
    // anime({
    //   targets:'div.postData',
    //   duration:5000,
    //   translateX: 250,
    //   rotate: '5turn',
    //   // backgroundColor: '#FFF',
    // })
  }
  async generateLayout(totalPosts:number){
    function totalUsedSpace(layout:any){
      let total = 0;
      layout.forEach((data:any)=>{
        total += data.postNumber;
      })
      return total;
    }
    const layouts:any[] = []
    console.log(layouts,this.postLayouts,layouts.length!==totalPosts)
    for (let i =0; totalUsedSpace(layouts) <= totalPosts; i++) {
      const sortedLayout = this.sortLayout(this.postLayouts);
      const returnedLayout = this.setLayout(sortedLayout[0]);
      layouts.push(returnedLayout);
      console.log('returnedLayout',returnedLayout,layouts,this.postLayouts,sortedLayout)
      await this.timer(3000);
      // if (i>10){
      //   break;
      // }
    }
  }
  setLayout(item){
    console.log('item',item)
    let correctLayout;
    this.postLayouts.forEach((layout:any,index:number) => {
      console.log(layout.name === item.name,layout.name,item.name)
      if(layout.name === item.name){
        this.postLayouts[index].stackNumber--;
        correctLayout = this.postLayouts[index];
      }
    });
    return correctLayout
  }
  sortLayout(layout:any[]){
    return layout.sort((a:any,b:any) => {
      // return (a.postNumber+a.stackNumber) - (b.postNumber+b.stackNumber);
      return (b.postNumber+b.stackNumber) - (a.postNumber+a.stackNumber) ;
    })
  }
}
