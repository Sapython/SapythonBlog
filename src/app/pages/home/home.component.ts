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
export class HomeComponent implements OnInit, OnDestroy {
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
  constructor(private scullyService: ScullyRoutesService) {}
  ngOnInit(): void {
    this.routeSub = this.scullyService.available$.subscribe((posts) => {
      this.posts = posts.filter((post) => post.title);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

}
