import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent {
  constructor() { }
  @Input() date:any = new Date();
  @Input() message:string = '';
  @Input() sender:boolean = false;

}
