import { Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() mode:'primary' | 'secondary' | 'warn' = 'primary';
  @Input() text:string = 'Button';
  @Input() radiusType:'pill' | 'circle' | 'normal' | 'slated' = 'normal';
  @Input() link:string = '#';
  @Input() icon:string = "";
  @Input() disabled:boolean = false;
  @Input() processing:boolean = false;
  @Input() inverse:boolean = false;
  @Output() appClick:EventEmitter<any> = new EventEmitter();
  @Output() appHover:EventEmitter<any> = new EventEmitter();
  // @ContentChild(ChildDirective) contentChild!: ChildDirective;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.mode);
  }

}
