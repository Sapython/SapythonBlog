import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import Scrollbar from 'smooth-scrollbar';
if (environment.production) {
  enableProdMode();
}
const usedColors:string[] = [];
const bubbleColors:string[] = ['#eb347a','#34a8eb','#443dff','#ff3b48','#6969ff']
function addBubble(element:HTMLElement){
  let bubble = document.createElement('div')
  bubble.classList.add('bubble')
  let availableColors = bubbleColors.filter(color=>!usedColors.includes(color))
  bubble.style.backgroundColor = availableColors[Math.floor(Math.random()*bubbleColors.length)]

  let positions = getRandomPosition(element);
  bubble.style.animationDelay = Math.floor(Math.random()*10)+'s'
  bubble.style.top=positions.y+'px'
  bubble.style.left=positions.x+'px'
  const size = Math.floor(Math.random()*100)+100;
  console.log(size)
  bubble.style.width=size+'px'
  bubble.style.height=size+'px'
  element.appendChild(bubble)
}
// generate random position x and y
function getRandomPosition(element:HTMLElement){
  let x = 100+Math.floor(Math.random()*element.clientWidth-200)
  let y = 100+Math.floor(Math.random()*1080-200)
  return {x,y}
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// window.onload = () =>{
//   Scrollbar.init(document.querySelector('#my-scrollbar') as HTMLElement);
// }
let container = document.getElementById('bubbleContainer')
if(container){
  for(let i=0;i < 3 ;i++){
    addBubble(container)
  }
}