import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card-wide',
  templateUrl: './post-card-wide.component.html',
  styleUrls: ['./post-card-wide.component.scss']
})
export class PostCardWideComponent {
  @Input() date:string='';
  @Input() authorName:string = '';
  @Input() authorImage:string = '';
  @Input() title:string = '';
  @Input() excerpt:string = '';
  @Input() featuredImage:string = '';
  @Input() imageAlt:string = '';
  @Input() urlMode:boolean = false;
  @Input() url:string = '';
  constructor() { }
}
