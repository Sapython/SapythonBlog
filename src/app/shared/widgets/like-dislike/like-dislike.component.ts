import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DataProvider } from 'src/app/providers/data.provider';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.scss'],
})
export class LikeDislikeComponent {
  @Input() likedDone: boolean = false;
  @Input() dislikedDone: boolean = false;
  @Input() likeCount: number = 0;
  @Input() dislikeCount: number = 0;
  @Input() isFavorite: boolean = false;
  @Output() liked: any = new EventEmitter();
  @Output() disliked: any = new EventEmitter();
  @Output() markedFav: any = new EventEmitter();
  constructor(public dataProvider: DataProvider) {}

  like() {
    if (!this.likedDone) {
      this.likeCount++;
      if (this.dislikedDone) {
        this.dislikeCount--;
        this.dislikedDone = false;
        this.disliked.emit(this.dislikedDone);
      }
      this.likedDone = true;
      this.liked.emit(this.likedDone);
    }
  }
  dislike() {
    if (!this.dislikedDone) {
      this.dislikeCount++;
      if (this.likedDone) {
        this.likeCount--;
        this.likedDone = false;
        this.liked.emit(this.likedDone);
      }
      this.dislikedDone = true;
      this.disliked.emit(this.dislikedDone);
    }
  }
  favorite() {
    this.isFavorite = !this.isFavorite;
    this.markedFav.emit(this.isFavorite);
  }
  get genProgress() {
    return (this.likeCount / (this.likeCount + this.dislikeCount)) * 100;
  }
  //convert number to shortString
  nFormatter(num: number, digits: number) {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
      : '0';
  }
  confettiArray() {
    let confettiArray = [];
    for (let i = 0; i < 10; i++) {
      confettiArray.push(i);
    }
    return confettiArray;
  }
}
