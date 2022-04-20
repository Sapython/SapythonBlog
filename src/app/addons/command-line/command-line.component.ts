import { Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-command-line',
  templateUrl: './command-line.component.html',
  styleUrls: ['./command-line.component.scss']
})
export class CommandLineComponent implements OnInit,OnDestroy {
  @ViewChild('commandsList') commandsList: ElementRef | undefined;
  @ViewChild('input') bar: ElementRef | undefined;
  @ViewChildren('result') result: QueryList<any> | undefined;
  searchForm:FormGroup = new FormGroup({
    searchText: new FormControl('')
  });
  searchSubscription:Subscription = Subscription.EMPTY;
  resultsVisible: boolean = false;
  currentSelection:number = -1;
  resultElements:any[]=[]
  constructor() { }
  commands: any[] = [
    {
      'title':'Refresh page',
      'description':'Refresh the page',
      'function':function () {
        alert('refresh page');
      },
    },
    {
      'title':'Portfolio',
      'description':'Go to a Portfolio',
      'function':function () {
        console.log('going to page');
      },
    },
    {
      'title':'Home',
      'description':'Go to a Home',
      'function':function () {
        console.log('going to page');
      },
    },
    {
      'title':'Blog',
      'description':'Go to a Blog',
      'function':function () {
        console.log('going to page');
      },
    },
    {
      'title':'Products',
      'description':'Go to a Products',
      'function':function () {
        console.log('going to page');
      },
    },
    {
      'title':'Contact',
      'description':'Go to a Contact',
      'function':function () {
        console.log('going to page');
      },
    },
    {
      'title':'Privacy Policy',
      'description':'Go to a Privacy Policy',
      'function':function () {
        console.log('going to page');
      },
    },
    {
      'title':'Disclaimer',
      'description':'Go to a Disclaimer',
      'function':function () {
        console.log('going to page');
      },
    },
    {
      'title':'Returns And Refunds',
      'description':'Go to a Returns And Refunds',
      'function':function () {
        console.log('going to page');
      },
    },
    {
      'title':'About',
      'description':'Go to a About',
      'function':function () {
        console.log('going to page');
      },
    },
    {
      'title':'FAQs',
      'description':'Go to a FAQs',
      'function':function () {
        console.log('going to page');
      },
    },
    {
      'title':'Reviews',
      'description':'Go to a Reviews',
      'function':function () {
        console.log('going to page');
      },
    },
    {
      'title':'Logout',
      'description':'Logout',
      'function':function () {
        console.log('going to page');
      },
    },
  ]
  filteredCommands:any[] = [];
  showResults(text:any){
    this.resultsVisible = true;
    this.filteredCommands = this.commands.filter((command:any)=>{
      return command.description.toLowerCase().includes(text.toLowerCase());
    })
  }
  closeModal(){
    this.resultsVisible = false;
  }
  debounce_leading(func:any, timeout = 300){
    let timer:any;
    return (...args: any) => {
      if (!timer) {
        func.apply(this, args);
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
      }, timeout);
    };
  }
  runCommand(func:any){
    this.closeModal();
    func();
  }
  getModdedChildren(children:any[]){
    const elements = [...children];
    elements.push(elements[0]);
    elements[0] = this.bar?.nativeElement;
    return elements;
  }
  @HostListener('document:keydown', ['$event'])
  navigateInList(event: KeyboardEvent) {
    if (['ArrowUp','ArrowDown'].includes(event.key)){
      event.preventDefault()
      const elements = this.getModdedChildren(this.commandsList?.nativeElement.children);
      if (event.key === 'ArrowDown' && this.currentSelection < this.commandsList?.nativeElement.children.length) {
        this.currentSelection++;
      } else if (event.key === 'ArrowUp' && this.currentSelection > 0) {
        this.currentSelection--;
      } else if (event.key === 'ArrowDown' && this.currentSelection === this.commandsList?.nativeElement.children.length) {
        this.currentSelection = 0;
      } else if (event.key === 'ArrowUp' && this.currentSelection === 0) {
        this.currentSelection = this.commandsList?.nativeElement.children.length;
      }
      elements[this.currentSelection].focus();
      elements[this.currentSelection].scrollIntoView();
    }
  }
  ngOnInit(): void {
    const html = document.querySelector('html')
    if (html){html.style.overflow = 'hidden'}
    this.searchSubscription = this.searchForm.valueChanges.subscribe((value:any)=>{
      this.showResults(value.searchText);
    })
  }
  ngOnDestroy(): void {
    const html = document.querySelector('html')
    if (html){html.style.overflow = 'auto'}
    this.searchSubscription.unsubscribe();
  }
}
