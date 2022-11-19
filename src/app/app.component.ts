import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { AuthenticationService } from './services/authentication.service';
import { MessagingService } from './services/messaging.service';
import { DataProvider } from './providers/data.provider';
import 'clipboard';
import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import anime from 'animejs/lib/anime.es';
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { slideInAnimation } from './animations/route.animation';
import { environment } from 'src/environments/environment';
// const luxy = require('luxy.js/dist/js/luxy.min.js');
// declare const luxy:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   slideInAnimation
  // ]
})
export class AppComponent implements AfterViewInit {
  environment = environment;
  routePath: string = 'Text';
  title = 'SapythonBlog';
  noHeaderPages: string[] = ['login', 'signup'];
  selectionSet:boolean = false;
  chatPopupVisible: boolean = true;
  chatOpen: boolean = false;
  locoScroll:any;
  routeAnimated:boolean = false;
  get getWindow():any { 
    return window;
  }
  constructor(
    private router: Router,
    public messagingService: MessagingService,
    public dataProvider: DataProvider,
    private authService:AuthenticationService,
    private contexts: ChildrenOutletContexts
  ) {}
  get enableHeader(): boolean {
    return !this.noHeaderPages.includes(window.location.pathname.split('/')[1]);
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    this.dataProvider.currentRoute.subscribe((data:string)=>{
      this.routePath = data;
      // this.routeAnimation();
    })
  }
  routeAnimation(){
    // document.querySelector('.router-wrapper').classList.add('animatable');
    // anime({
    //   targets: '#changer',
    //   height:[
    //     { value: '0vh', duration: 500, easing: 'easeInOutQuad' },
    //     { value: '110vh', duration: 500, easing: 'easeInOutQuad' },
    //     { value: '0vh', duration: 500, delay:1000, easing: 'easeInOutQuad' },
    //   ],
    // })
    // anime({
    //   targets: '#routeName',
    //   rotate:[
    //     { value: '0deg', duration: 500, easing: 'easeInOutQuad', delay:500 },
    //     { value: '360deg', duration: 500, easing: 'easeInOutQuad' },
    //     { value: '0deg', duration: 500, delay:1000, easing: 'easeInOutQuad' },
    //   ],
    //   scale:[
    //     { value: '0', duration: 500, easing: 'easeInOutQuad'},
    //     { value: '1', duration: 500, easing: 'easeInOutQuad',delay:500  },
    //     { value: '0', duration: 500, delay:1000, easing: 'easeInOutQuad' },
    //   ],
    // })
    // setTimeout(()=>{
    //   // document.querySelector('.router-wrapper').classList.remove('animatable');
    // },
    // 2500)
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
