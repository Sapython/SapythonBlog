import { Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  loading: boolean = false;
  illegalWidget: boolean = false;
  constructor(private vcref: ViewContainerRef,private cfr: ComponentFactoryResolver){ }
  @Input() widget: any;
  @Input() data:any;
  async ngOnInit(): Promise<void> {
    this.vcref.clear();
    this.loading = true;
    if (this.widget=='actionButton') {
      const { ActionButtonComponent } = await import('./action-button/action-button.component');
      const componentFactory = this.cfr.resolveComponentFactory(ActionButtonComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      // await import ('./action-button/action-button.module').then(m => m.ActionButtonModule)
      this.loading = false;
    } else if (this.widget=='subscribe'){
      const { SubscribeComponent } = await import('./subscribe/subscribe.component');
      const componentFactory = this.cfr.resolveComponentFactory(SubscribeComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    } else if (this.widget=='postCarousel'){
      const { PostCarouselComponent } = await import('./post-carousel/post-carousel.component');
      const componentFactory = this.cfr.resolveComponentFactory(PostCarouselComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    } else if (this.widget=='tagCloud'){
      const { TagCloudComponent } = await import('./tag-cloud/tag-cloud.component');
      const componentFactory = this.cfr.resolveComponentFactory(TagCloudComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    } else if (this.widget=='socialButtons'){
      const { SocialButtonsComponent } = await import('./social-buttons/social-buttons.component');
      const componentFactory = this.cfr.resolveComponentFactory(SocialButtonsComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    } else if (this.widget=='youtubeEmbed'){
      const { YoutubeEmbedComponent } = await import('./youtube-embed/youtube-embed.component');
      const componentFactory = this.cfr.resolveComponentFactory(YoutubeEmbedComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    }  else if (this.widget=='twitterFeed'){
      const { TwitterFeedComponent } = await import('./twitter-feed/twitter-feed.component');
      const componentFactory = this.cfr.resolveComponentFactory(TwitterFeedComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    } else if (this.widget=='poll'){
      const { PollComponent } = await import('./poll/poll.component');
      const componentFactory = this.cfr.resolveComponentFactory(PollComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    } else if (this.widget=='survey'){
      const { SurveyComponent } = await import('./survey/survey.component');
      const componentFactory = this.cfr.resolveComponentFactory(SurveyComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    } else if (this.widget=='flashMessage'){
      const { FlashMessageComponent } = await import('./flash-message/flash-message.component');
      const componentFactory = this.cfr.resolveComponentFactory(FlashMessageComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    } else if (this.widget=='calendar'){
      const { CalendarComponent } = await import('./calendar/calendar.component');
      const componentFactory = this.cfr.resolveComponentFactory(CalendarComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    } else if (this.widget=='maps'){
      const { MapsComponent } = await import('./maps/maps.component');
      const componentFactory = this.cfr.resolveComponentFactory(MapsComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    } else if (this.widget=='search'){
      const { SearchComponent } = await import('./search/search.component');
      const componentFactory = this.cfr.resolveComponentFactory(SearchComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    } else if (this.widget=='testimonials'){
      const { TestimonialsComponent } = await import('./testimonials/testimonials.component');
      const componentFactory = this.cfr.resolveComponentFactory(TestimonialsComponent);
      const componentRef = this.vcref.createComponent(componentFactory);
      componentRef.instance.data = this.data;
      this.loading = false; 
    } else {
      this.illegalWidget = true;
    }
  }

}
