import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PartialObserver, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  pageName: string = window.location.pathname.split('/')[1];
  widthOffset:number = 0;
  topOffset:number = 30;
  routerListner:Subscription = Subscription.EMPTY;
  constructor(private router: Router) {}
  ngOnInit(): void {
    document.addEventListener('resize',()=>{
      console.log('Resized')
    })
    this.router.events.subscribe((observations:any)=>{
      this.pageName = window.location.pathname.split('/')[1];
      this.ngAfterViewInit();
    })
  }
  ngAfterViewInit(): void {
    const linkFollower = document.getElementById('linkFollower') as HTMLElement;
    const navElements = document.querySelector('nav')
      ?.children as HTMLCollection;
    for (let index = 0; index < navElements.length; index++) {
      const element = navElements[index] as HTMLElement;
      element.style.border = "none"
      if (element.innerText.toLowerCase()==this.pageName.toLowerCase()) {
        linkFollower.style.top = (element.offsetHeight + this.topOffset).toString() + 'px';
        linkFollower.style.left = (element.offsetLeft - this.widthOffset/3).toString() + 'px';
        linkFollower.style.width = (element.offsetWidth+this.widthOffset).toString() + 'px';
        setTimeout(()=>{
          linkFollower.style.width = "0px"
          console.log((document.querySelector('.active') as HTMLElement).style.borderBottom="solid 5px var(--color-main)");
          // element.style.borderBottomColor="var(--color-main)";
        },500)
      }
    }  
  }
}
