import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() src:string = '';
  @Input() alt:string = '';
  @Input() fit:string = 'cover';
  @Input() width:string = '100%';
  @Input() height:string = '100%';
  @Input() borderRadius:string = '0';
  @Input() root:string  = '';
  @Input() extraLarge:boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log('Recieved image sizes:',this.src, this.width, this.height);
  }

}
