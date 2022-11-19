import { Component, Input, OnInit } from '@angular/core';
import { ActionButton } from '../widgets.structures';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit{
  @Input() data:ActionButton | undefined;
  constructor() { }
  ngOnInit(){
    if (!this.data){
      throw new Error('ActionButtonComponent: data is undefined');
    } else {
      console.log(this.data);
    }
  }
}
