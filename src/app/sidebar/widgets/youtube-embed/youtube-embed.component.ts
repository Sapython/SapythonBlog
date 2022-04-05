import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-embed',
  templateUrl: './youtube-embed.component.html',
  styleUrls: ['./youtube-embed.component.scss']
})
export class YoutubeEmbedComponent {
  @Input() data:any;
  constructor() { }
}
