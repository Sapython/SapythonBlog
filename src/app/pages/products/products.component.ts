import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { random } from 'animejs';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  colors: string[] = ['#eb347a', '#34a8eb', '#443dff', '#ff3b48', '#6969ff'];
  list: any[] = this.genList(15);
  constructor() {}
  genList(number: number): any[] {
    let list: any[] = [];
    for (let i = 0; i < number; i++) {
      const size = this.getRandomNumber(10, 200);
      list.push({
        shape: this.getRandomShape(),
        color: this.colors[this.getRandomNumber(0, this.colors.length - 1)],
        size: size,
      });
    }
    return list;
  }
  getRandomShape(): string {
    let shapes: string[] = ['circle', 'square', 'triangle'];
    return shapes[Math.floor(Math.random() * shapes.length)];
  }
  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  getRandomFloat(min: number, max: number) {
    return Math.random() * (max - min + 1) + min;
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(document.querySelectorAll('svg'));
    const elements = document.querySelectorAll('svg');
    const delayTime = 50;
    let counter = 1;
    anime({
      targets: '#projectsHeader',
      keyframes: [
        {
          skewY: 10,
        },
        {
          skewY: 15,
        },
        {
          skewY: 0,
          skewX: -10,
        },
        {
          skewX: -15,
        },
        {
          skewX: 0,
        },
      ],
      easing: 'linear',
      duration: 2000,
      delay:3000,
    });
    // anime({
    //   targets: '#projectsHeader',
    //   translateY:1000,
    //   duration:1000,
    // })
    elements.forEach((element: any) => {
      anime({
        targets: element,
        // opacity:[
        //   {value:0,duration:0},
        //   {value:1,duration:100},
        // ],
        // top:window.scrollY,
        translateX: [
          { value: '-50%', duration: 0 },
          { value: '-50%', duration: 1500 },
        ],
        top: this.getRandomNumber(0, window.innerHeight) - 200,
        left: this.getRandomNumber(0, window.innerWidth),
        delay: counter * delayTime+3000,
        easing: 'easeInOutElastic',
      });
      anime({
        targets: element,
        translateX: this.getRandomNumber(-200, 200),
        translateY: anime.random(0, 10),
        delay: anime.random(500, 2000) + counter * delayTime+3000,
        opacity: anime.random(0.0, 1),
        loop: true,
        duration: anime.random(3000, 10000),
        rotate: anime.random(-360, 360),
        direction: 'alternate',
        easing: 'easeOutInSine',
      });
      counter++;
    });
  }
}
