import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';
import { SwiperOptions, Swiper, Autoplay, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore from 'swiper';
declare var TweenMax: any;
declare var Linear: any;
declare var Sine: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  posts: ScullyRoute[] = [];
  projectGrid: { flex: number }[] = [];
  forwardVisible: boolean = false;
  resizeTimer: NodeJS.Timeout | undefined;
  projectShowcase: 'website' | 'app' | 'server' | 'other' = 'website';
  sizes:string[] = ['s', 'm', 'l'];
  container: any;
  icons:any;
  private routeSub: any;
  gridAnimationCounter: number = 0;
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
  this.startStackAnimation(this.icons,this.container,this.sizes);
    // debounce the re-init so it doesn't totally freak out while draging
  }
  startStackAnimation(icons:any,container:HTMLElement,sizes:string[]) {
    const w = container.offsetWidth;
    const h = container.offsetHeight;
    icons.forEach((icon:any, i:number) => {
      var size = sizes[Math.ceil(Math.random() * 3) - 1];
      TweenMax.set(icon, {
        attr: { class: size },
        y: this.genRandom(50, h - 150),
        x: this.genRandom(w, w + 50),
      });
      this.animate(icon, i,icons);
    }); 
  }
  @HostListener('resize')
  resizeDebounce() {
    if(this.resizeTimer){clearTimeout(this.resizeTimer);}
    this.resizeTimer = setTimeout(()=>{this.startStackAnimation(this.icons,this.container,this.sizes)}, 250);
  }
  animate(element: Element, i: any,icons:any) {
    TweenMax.to(element, this.genRandom(110, 120), {
      x: -1500,
      ease: Linear.easeNone,
      repeat: -1,
      delay: (-115 / icons.length) * i,
    });
    TweenMax.to(element, this.genRandom(6, 16), {
      y: '+=50',
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
      delay: this.genRandom(-16, -6),
    });
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
