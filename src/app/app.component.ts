import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { MessagingService } from './services/messaging.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slide } from 'ngx-router-animations';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('slide', [
      transition('* <=> *', useAnimation(slide))
    ])
  ]
})
export class AppComponent {
  title = 'SapythonBlog';   
  noHeaderPages:string[] = [
    'login',
    'signup'
  ];
  @ViewChild('contentCylinder') ContentCylinder: ElementRef | undefined;
  constructor(private swPush: SwPush,public messagingService: MessagingService,private authService:AuthenticationService) {
    
  }
  get enableHeader():boolean{
    return !this.noHeaderPages.includes(window.location.pathname.split('/')[1]);
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
