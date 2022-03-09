import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';
import { SwiperOptions, Swiper, Autoplay, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore from 'swiper'
import { wrapGrid } from 'animate-css-grid'
SwiperCore.use([Virtual,Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit,AfterViewInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  posts: ScullyRoute[] = [];
  private routeSub: any;
  gridAnimationCounter:number = 0;
  projectsConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  };
  projects: any[] = [
    {
      title: 'Project 1',
      image: 'programming',
      route: 'projects/project-1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nibh nisi, tincidunt vel facilisis pretium, varius dignissim magna. Praesent sodales lectus eget lobortis laoreet. Cras et sodales odio. Donec ex eros, viverra sit amet lectus eget, volutpat facilisis orci. Nunc dapibus tellus sit amet elit eleifend, id congue nisl finibus. In ullamcorper purus in tempor maximus. Aliquam lectus purus, lacinia nec hendrerit nec, ullamcorper ut lacus.',
    },
    {
      title: 'Project 2',
      image: 'programming',
      route: 'projects/project-1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nibh nisi, tincidunt vel facilisis pretium, varius dignissim magna. Praesent sodales lectus eget lobortis laoreet. Cras et sodales odio. Donec ex eros, viverra sit amet lectus eget, volutpat facilisis orci. Nunc dapibus tellus sit amet elit eleifend, id congue nisl finibus. In ullamcorper purus in tempor maximus. Aliquam lectus purus, lacinia nec hendrerit nec, ullamcorper ut lacus.',
    },
    {
      title: 'Project 3',
      image: 'programming',
      route: 'projects/project-1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nibh nisi, tincidunt vel facilisis pretium, varius dignissim magna. Praesent sodales lectus eget lobortis laoreet. Cras et sodales odio. Donec ex eros, viverra sit amet lectus eget, volutpat facilisis orci. Nunc dapibus tellus sit amet elit eleifend, id congue nisl finibus. In ullamcorper purus in tempor maximus. Aliquam lectus purus, lacinia nec hendrerit nec, ullamcorper ut lacus.',
    },
  ];
  gridPatterns:string[] = [
    "'a a b b''c c d e'",
    "'a b c d''a b c e'",
    "'a a a b''c c d e'",
    "'a b b b''c d d e'",
    "'a b b c''d e e e'",
    "'a b b b''c d e e'",
  ]
  constructor(private scullyService: ScullyRoutesService) {}
  ngOnInit(): void {
    this.routeSub = this.scullyService.available$.subscribe((posts) => {
      this.posts = posts.filter((post) => post.title);
    });
  }
  ngAfterViewInit(): void {
    // const responses = document.querySelector('ol.responses') as any;
    // const responsesArray = Array.from(responses.children);
    // const coordinates  = responses.getClientRects()[0]
    // console.log(coordinates)
    // responsesArray.forEach((response:any,index:any)=>{
    //   const xPos = this.getRandomInt(300,window.innerWidth-response.clientWidth-100)
    //   const yPos = this.getRandomInt(coordinates.top+100,coordinates.bottom-response.clientHeight-100)
    //   console.log(xPos,yPos)
    //   response.style.position = 'absolute'
    //   response.style.top = xPos+ 'px'
    //   response.style.left = yPos + 'px'
    //   console.log(response)
    //   // console.log(coordinates)
    // });
    const responses = document.querySelector('ol.responses') as HTMLElement;
    const responsesArray = Array.from(responses.children);
    // const gridWrapper =  wrapGrid(responses,{duration : 600,stagger : 100,easing: 'backInOut',})
    setInterval(() => {
      // responsesArray.forEach((elm:any)=>{
        
      // })
      for (let elm of responsesArray) {
        const elmement:any = elm;
        // elmement.style.animation = "fadeOut 450ms linear"
        setTimeout(()=>{
          responses.removeChild(elm)
        },500)
      }
      if (this.gridAnimationCounter>=this.gridPatterns.length){
        this.gridAnimationCounter = 0
      }else{
        this.gridAnimationCounter++
      }
      responses.style.gridTemplateAreas = this.gridPatterns[this.gridAnimationCounter];
      let counter = 0;
      responsesArray.forEach((elm:any)=>{
        setTimeout(() => {
          // elm.animation = "fadeIn 450ms linear"
          counter++;
          elm.style.animationDelay = (counter*100).toString()+'ms'
          responses.appendChild(elm)
        },500)
      })
      counter = 0
    }, 5000);
    // console.log(responses)
    // setTimeout(() => {
    //   gridWrapper.forceGridAnimation();
    // }, 2000);
  }
  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
  checkView(event:any){
    console.log(event)
  }
  getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}
