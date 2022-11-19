import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-feeroz',
  templateUrl: './feeroz.component.html',
  styleUrls: ['./feeroz.component.scss']
})
export class FeerozComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    console.log('alpha')
  }

}

type Product = {
  productName:string,
  productImage:string,
  productQuantity:number,
  productPrice:number,
  available:boolean
}