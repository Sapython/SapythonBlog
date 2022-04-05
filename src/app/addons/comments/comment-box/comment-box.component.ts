import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { CommentService } from '../services/comment.service';
import { CommentData } from '../structures/commentData.type';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Input() comment:CommentData = {id:'',comment:'N/A',date:new Date(),name:'N/A',userId:'N/A',userImage:'N/A',likes:0,dislikes:0,replyAvailable:false};
  @Input() lastColor:boolean = true;
  @Input() path:string[] = [];
  @ViewChild('box') box:any;
  showReplyForm:boolean = false;
  showReplies:boolean = false;
  repliesFetched:boolean = false;
  comments:CommentData[] = [];
  fetchingReplies:boolean = false;
  currentCommentId:string = '';
  nextPath:string[] = [];
  commentForm:FormGroup = new FormGroup({
    comment:new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(300)])
  });
  constructor(private commentService:CommentService,private dataProvider:DataProvider,private alertify:AlertsAndNotificationsService) { }
  async getComments(){
    // console.log('Getting comments')
    let comments = await this.commentService.getReplyComments(this.path);
    let finalComments:CommentData[] = []
    comments.forEach((comment:any) => {
      let data = comment.data()
      data.id = comment.id;
      finalComments.push(data);
    });
    // console.log('Got comments',finalComments)
    return finalComments;
  }
  replyComment(){
    // console.log('comment parent',this.nextPath)
    console.log((this.nextPath.join('/replies/')) + '/replies')
    if (this.commentForm.valid && this.nextPath.length > 0){
      this.commentService.addComment({
        id:'',
        userId:this.dataProvider.userData?.userId || '',
        comment:this.commentForm.value.comment,
        name:this.dataProvider.userData?.displayName || '',
        date:new Date(),
        replyAvailable:false,
        dislikes:0,
        likes:0,
        userImage:this.dataProvider.userData?.photoURL || ''
      },this.nextPath).then(()=>{
        this.comment.replyAvailable = true;
      });
      this.commentForm.reset();
    } else { 
      this.alertify.presentToast('Invalid Comment');
    }
  }
  showReply(){
    if (!this.showReplies && !this.repliesFetched){
      this.fetchingReplies = true;
      this.getComments().then((commentData)=>{
        this.showReplies = true;
        this.repliesFetched = true;
        console.log('Got comments',commentData)
        this.comments = commentData;
        this.fetchingReplies = false;
        this.showReplyForm = false;
      })
    } else if(!this.showReplies) {
      this.showReplies = true;
      this.showReplyForm = false;
    } else {
      this.showReplies = false;
    }
    // this.showReplies = !this.showReplies;
  }
  ngOnInit(): void {
    console.log('Comment',this.path,this.comment.id,this.comment.id in this.path)
    this.nextPath = this.path;
    if(!this.path.includes(this.comment.id)){this.nextPath.push(this.comment.id)}
    console.log('Comment',this.nextPath)
  }
  getDate(date:any){
    return date.toDate().toDateString();
  }
}
