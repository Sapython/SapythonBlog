import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataProvider } from '../providers/data.provider';

@Injectable({
  providedIn: 'root',
})
export class AnimGuard implements CanActivate {
  constructor(private dataProvider: DataProvider) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('AnimGuard', state.url.replaceAll('/', ''));
    if (state.url) {
      this.dataProvider.routeSubject.next(this.getPathText(state.url));
    }
    return true;
  }
  getPathText(url: string) {
    console.log('getPathText', url.split('/').length, url.split('/'));
    if (url.split('/').length > 1) {
      const routes = url.split('/');
      let result = '';
      for (let iterator of routes) {
        if (!iterator) {
          continue;
        }
        console.log('getPathText', iterator);
        if (result === '') {
          result = this.toUpperCase(iterator);
        } else {
          result += ' - ' + this.toUpperCase(iterator);
        }
      }
      return result;
    } else {
      return this.toUpperCase(url);
    }
  }
  toUpperCase(text: string) {
    console.log('toUpperCase', text, text.length, text.slice(1));
    return text[0].toUpperCase() + text.slice(1);
  }
}
