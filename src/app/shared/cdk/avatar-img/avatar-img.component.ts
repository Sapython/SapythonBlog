import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-img',
  templateUrl: './avatar-img.component.html',
  styleUrls: ['./avatar-img.component.scss']
})
export class AvatarImgComponent {
  @Input() src:string = '';
  @Input() alt:string = '';
  @Input() fit:string = 'cover';
  @Input() width:string = '60px';
  @Input() height:string = '60px';
  @Input() borderRadius:string = '50%';
  @Input() root:string  = '';
  @Input() style:any;
  @Input() animate:boolean = false;
  constructor() { }
}
