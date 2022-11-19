import { trigger, transition, style, group, animate, query } from "@angular/animations";

export const slideInAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'absolute' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ top: '100vh' })
      ], { optional: true }),
      query(':leave', [
        style({ top: '0vh' })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('300ms 500ms ease-out', style({ top: '100vh' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms 1000ms ease-out', style({ top: '0vh' }))
        ], { optional: true }),
      ]),
    ]),
  ]);