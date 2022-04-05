import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-carousel',
  templateUrl: './post-carousel.component.html',
  styleUrls: ['./post-carousel.component.scss']
})
export class PostCarouselComponent {
  @Input() data:any;
  constructor() { }
}
