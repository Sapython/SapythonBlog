import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slide } from 'ngx-router-animations';
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
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('slide', [transition('* <=> *', useAnimation(slide))])],
})
export class AppComponent implements AfterViewInit {
  title = 'SapythonBlog';
  noHeaderPages: string[] = ['login', 'signup'];
  selectionSet:boolean = false;
  chatPopupVisible: boolean = true;
  chatOpen: boolean = false;
  constructor(
    private router: Router,
    public messagingService: MessagingService,
    public dataProvider: DataProvider,
    private authService:AuthenticationService
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
    
    const postData = document.getElementById('postData')
    // if(postData){postData.addEventListener('selectstart',this.simple)}else{console.log('No post data')}
  }
  
  
}
