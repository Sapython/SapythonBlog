import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SapythonBlog';
  @ViewChild('contentCylinder') ContentCylinder: ElementRef | undefined;
  constructor() {}
    ngOnInit() {
    }
}
