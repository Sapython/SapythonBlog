import { Component, ElementRef, ViewChild } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { MessagingService } from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SapythonBlog';
  @ViewChild('contentCylinder') ContentCylinder: ElementRef | undefined;
  constructor(private swPush: SwPush,public messagingService: MessagingService) {
    
  }
  ngOnInit() {
    
  }
}
