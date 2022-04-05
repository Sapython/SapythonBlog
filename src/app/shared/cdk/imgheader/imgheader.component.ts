import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgheader',
  templateUrl: './imgheader.component.html',
  styleUrls: ['./imgheader.component.scss']
})
export class ImgheaderComponent implements OnInit {
  @Input() src:string = '';
  @Input() alt:string = '';
  @Input() fit:string = 'cover';
  @Input() width:string = '100%';
  @Input() height:string = '100%';
  @Input() borderRadius:string = '0';
  @Input() root:string  = '';
  @Input() extraLarge:boolean = false;
  @Input() style:any;
  @Input() urlMode:boolean = false; 
  @Input() animate:boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log('URLMDOE',this.urlMode);
    if(this.src=='' && !this.urlMode){
      this.urlMode = true;
      this.src= "https://via.placeholder.com/"+(this.width.toString() || '400')+"x"+(this.height.toString() || '400');
      console.log(this.src);
    }
  }
}
