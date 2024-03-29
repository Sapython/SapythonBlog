import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  HostListener,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { AllowIn, ShortcutInput } from 'ng-keyboard-shortcuts';
import { PartialObserver, Subscription } from 'rxjs';
import { DataProvider } from 'src/app/providers/data.provider';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  pageName: string = window.location.pathname.split('/')[1];
  widthOffset: number = 0;
  topOffset: number = 30;
  routerListner: Subscription = Subscription.EMPTY;
  notificationEnabled: boolean = false;
  toggleView: boolean = false;
  chatPopupVisible: boolean = true;
  chatOpen: boolean = false;
  notificationInitialized: boolean = false;
  terminalVisible:boolean = false;
  commandPallete:any;
  shortcuts: ShortcutInput[] = [];
  constructor(
    private router: Router,
    public messagingService: MessagingService,
    public dataProvider: DataProvider,
    private vcref: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}
  ngOnInit(): void {
    this.shortcuts.push(  
      {  
          key: "ctrl + space",  
          preventDefault: true,  
          allowIn: [AllowIn.Textarea, AllowIn.Input],  
          command: e => this.showCommandLine()  
      },
      {  
        key: "escape",
        preventDefault: true,  
        allowIn: [AllowIn.Textarea, AllowIn.Input],  
        command: e => {if(this.commandPallete){this.commandPallete.destroy()}}
    })
    this.notificationEnabled = Notification.permission === 'granted';
    document.addEventListener('resize', () => {
      console.log('Resized');
    });
    this.router.events.subscribe((observations: any) => {
      this.pageName = window.location.pathname.split('/')[1];
      this.ngAfterViewInit();
    });
  }
  ngAfterViewInit(): void {
    const linkFollower = document.getElementById('linkFollower') as HTMLElement;
    const navElements = document.querySelector('nav')
      ?.children as HTMLCollection;
    for (let index = 0; index < navElements.length; index++) {
      const element = navElements[index] as HTMLElement;
      element.style.border = 'none';
      if (element.innerText.toLowerCase() == this.pageName.toLowerCase()) {
        linkFollower.style.top =
          (element.offsetHeight + this.topOffset).toString() + 'px';
        linkFollower.style.left =
          (element.offsetLeft - this.widthOffset / 3).toString() + 'px';
        linkFollower.style.width =
          (element.offsetWidth + this.widthOffset).toString() + 'px';
        setTimeout(() => {
          linkFollower.style.width = '0px';
          console.log(
            ((
              document.querySelector('.active') as HTMLElement
            ).style.borderBottom = 'solid 5px rgb(var(--color-main)')
          );
          // element.style.borderBottomColor="rgb(var(--color-main)";
        }, 500);
      }
    }
    // for (let i =1; i < 20; i++){
    //   if (!this.notificationInitialized){
    //     setTimeout(() => {
    //       if (this.notificationEnabled && !this.notificationInitialized) {
    //         if (this.dataProvider.userData) {
    //           this.messagingService.startNotificationService();
    //           this.notificationInitialized = true;
    //         }
    //       }
    //     }, 5000 * i);
    //   }
    // }
  }
  toggleNotification() {
    console.log('Toggle Notification');
    if (this.notificationEnabled) {
      this.messagingService.unsubscribeNotification();
      this.notificationEnabled = false;
    } else {
      this.messagingService.startNotificationService();
      this.notificationEnabled = Notification.permission === 'granted';
    }
  }
  login() {
    this.router.navigate(['login']);
  }
  hello() {
    console.log('Hello');
  } 

  async showCommandLine(){
    // const { CommandLineModule } = await import('../../../addons/command-line/command-line.module');
    const { CommandLineComponent } = await import('../../../addons/command-line/command-line.component');
    const componentFactory = this.cfr.resolveComponentFactory(CommandLineComponent);
    this.commandPallete = this.vcref.createComponent(componentFactory);
  }
  
}
