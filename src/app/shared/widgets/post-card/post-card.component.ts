import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() date:string='';
  @Input() authorName:string = '';
  @Input() authorImage:string = '';
  @Input() title:string = '';
  @Input() excerpt:string = '';
  @Input() featuredImage:string = '';
  @Input() imageAlt:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
