import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import 'clipboard';
import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import { isPlatformBrowser } from '@angular/common';

declare var Prism: any;

@Injectable({
  providedIn: 'root'
})
export class HighlightService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}
