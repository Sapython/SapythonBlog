import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [LottieModule],
})
export class LottieServerModuleModule { }
