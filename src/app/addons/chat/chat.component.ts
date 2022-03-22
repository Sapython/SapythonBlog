import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataProvider } from 'src/app/providers/data.provider';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked{
  @ViewChild('scrollMe') private myScrollContainer: ElementRef | undefined;
  messages:any[] = [];
  messagesSubscription:Subscription | undefined = Subscription.EMPTY;
  constructor(private ChatService:ChatService,public dataProvider:DataProvider) { }
  closingChat:boolean = false;
  @Output() visible = new EventEmitter();
  chatForm:FormGroup = new FormGroup({
    message:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(200)])
  })
  closePopup(){
    this.closingChat=true;
    setTimeout(()=>{
      this.visible.emit(false);
    },300)
    // this.closingChat = false;
  }
  ngOnInit(): void {
    this.closingChat = false;
    if (this.dataProvider.userID){
      this.messagesSubscription = this.ChatService.getMessages().subscribe((data:any)=>{
        this.messages = [];
        data.forEach((element:any) => {
          this.messages.push(element.data());
        });
        console.log(this.messages);
      })
    }
  }
  ngOnDestroy(): void {
    if(this.messagesSubscription){
      this.messagesSubscription.unsubscribe();
    }
  }
  sendMsg(){
    if (this.chatForm.valid){
      this.ChatService.sendMessage(this.chatForm.value.message);
      this.chatForm.reset();
    }
  }
  convertDate(date:any){
    return date.toDate().toLocaleString()
  }
  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }
  scrollToBottom(): void {
    try {
        this.myScrollContainer!.nativeElement.scrollTop = this.myScrollContainer!.nativeElement.scrollHeight;
    } catch(err) {
      console.log(err);
    }                 
  }
}

