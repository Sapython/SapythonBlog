import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.scss']
})
export class TagCloudComponent {
  @Input() data:any;
  constructor() { }
}
