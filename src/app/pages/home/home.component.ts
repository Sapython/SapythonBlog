import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import anime from 'animejs/lib/anime.es';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

declare var VanillaTilt:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  posts: ScullyRoute[] = [];
  projectGrid: { flex: number }[] = [];
  forwardVisible: boolean = false;
  resizeTimer: NodeJS.Timeout | undefined;
  projectShowcase: 'website' | 'app' | 'server' | 'website2' | 'other' = 'website2';
  sizes:string[] = ['s', 'm', 'l'];
  container: any;
  icons:any;
  private routeSub: any;
  gridAnimationCounter: number = 0;
  pricingSelected:'mobile' | 'web' = 'web';
  websiteOptions: AnimationOptions = {
    path: '/assets/animations/website.json',
    loop: false,
    autoplay: false,
  };
  appOptions: AnimationOptions = {
    path: '/assets/animations/app.json',
    loop: false,
    autoplay: false,
  };
  serverOptions: AnimationOptions = {
    path: '/assets/animations/Server.json',
    loop: false,
    autoplay: false,
  };
  otherOptions: AnimationOptions = {
    path: '/assets/animations/Other.json',
    loop: false,
    autoplay: false,
  };
  animations: any[] = [];
  animationCreated(animationItem: AnimationItem,name:string): void {
    console.log(animationItem);
    this.animations[name] = animationItem;
  }
  playAnimation(animation:string){
    // console.log(this.animations[animation].currentFrame,this.animations[animation].isPaused,animation);
    if (this.animations[animation].isPaused || this.animations[animation].currentFrame > 200) {
      this.animations[animation].goToAndPlay(0);
    } else {
      // console.log('pausing',animation);
    }
  }
  constructor(private scullyService: ScullyRoutesService) {}
  ngOnInit(): void {
    this.projectGrid = this.genArray(10);
    this.routeSub = this.scullyService.available$.subscribe((posts) => {
      this.posts = posts.filter((post) => post.title);
    });
  }
  ngAfterViewInit(): void {
    this.sizes = ['s', 'm', 'l'];
    this.container = document.getElementById('integration-list') as HTMLElement;
    this.icons = document.querySelectorAll('#integration-list li');
    // this.startStackAnimation(this.icons,this.container,this.sizes);
    const w = this.container.offsetWidth;
    const h = this.container.offsetHeight;
    const margin = this.icons[0].offsetWidth+50;
    const delayOffset = 5;
    this.icons.forEach((element:Element,i:number) => {
      anime.set(element,{
        top:this.genRandom(50, h - 150),
        left: this.genRandom(w+20, w + 70),
      })
      const animationX = anime({
        targets: element,
        translateX: [0+margin,-window.innerWidth-margin],
        margin:anime.random(-70,70),
        duration: 5000*this.icons.length,
        delay: (i*delayOffset)*1000,
        easing: 'linear',
        loop:true,
      })
      animationX.seek(animationX.duration*0.99);
      anime({
        targets: element,
        top:[this.genRandom(0,100),this.genRandom(200,h-150)
          // {value:,duration:0},
          // {value:this.genRandom(0+150,h-150),duration:5000},
        ],
        direction:'alternate',
        easing:'easeInOutQuad',
        delay: (i*delayOffset)*this.genRandom(500,1000),
        loop:true,
        duration:50000,
      })
    });
    // debounce the re-init so it doesn't totally freak out while draging
    VanillaTilt.init(document.querySelectorAll('.tilt-container'),{
      speed:100,
      easing:'ease-in-out',
      perspective:3000,
    })
  }
  startStackAnimation(icons:any,container:HTMLElement,sizes:string[]) {
    const w = container.offsetWidth;
    const h = container.offsetHeight;
    icons.forEach((icon:any, i:number) => {
      var size = sizes[Math.ceil(Math.random() * 3) - 1];
      const left = this.genRandom(w, w + 50).toString()
      console.log(left);
      anime({
        targets: icon,
        top:this.genRandom(50, h - 150).toString()+'px',
        left: left+'px',
        duration:0,
      })
      this.animate(icon, i,icons);
    }); 
  }
  @HostListener('resize')
  resizeDebounce() {
    if(this.resizeTimer){clearTimeout(this.resizeTimer);}
    this.resizeTimer = setTimeout(()=>{this.startStackAnimation(this.icons,this.container,this.sizes)}, 250);
  }
  animate(element: Element, i: any,icons:any) {
    anime({
      targets: element,
      transformX: [0,-500],
      duration: this.genRandom(110, 120),
      delay: (-115 / icons.length) * i,
      easing: 'linear',
      loop:true,
    })
    anime({
      targets: element,
      transformY: '50%',
      duration: this.genRandom(110, 120),
      delay: (-115 / icons.length) * i,
      easing: 'easeInOut',
      loop:true,
      alternate:true
    })
  }
  genRandom(min: number, max: number) {
    return min + Math.random() * (max - min);
  }
  translate(element: HTMLElement, startX: number) {
    const fullWidth = window.innerWidth;
    let currentX = startX;
    let currentY = 0;
    const maxHeight = 200;
    setInterval(() => {
      if (currentX <= fullWidth) {
        currentX -= 5;
        if (currentY < maxHeight) {
          currentY += 10;
        }
        element.style.transform = `translate3d(${currentX}px,0px,0)`;
        if (currentX <= -50) {
          currentX = fullWidth;
          element.style.transform = `translate3d(${currentX}px,0px,0)`;
        }
      }
    }, 100);
  }
  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
  genArray(n: number): { flex: number }[] {
    const grids = [];
    for (let index = 0; index < n; index++) {
      grids.push({ flex: this.genRandom(2, 4) });
    }
    return grids;
  }
  // genRandom(min:number,max:number){
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
}
