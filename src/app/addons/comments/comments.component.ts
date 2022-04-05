import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { CommentService } from './services/comment.service';
import { CommentData } from './structures/commentData.type';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commentMode:'mostLiked'|'mostRecent' = 'mostLiked';
  commentForm:FormGroup = new FormGroup({
    comment:new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(300)])
  });
  constructor(private commentService:CommentService,public dataProvider:DataProvider,private alertify:AlertsAndNotificationsService) { }
  comments:CommentData[] = []
  ngOnInit(): void {
    this.commentService.getComments().then(comments=>{
      comments.forEach((comment:any) => {
        let data = comment.data()
        data.id = comment.id;
        console.log(data)
        this.comments.push(data);
      });
    })
  }
  addComment(){
    if (this.commentForm.valid){
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
      }).then(()=>{
        this.alertify.presentToast('Comment added successfully');
      });
      this.commentForm.reset();
    } else {
      this.alertify.presentToast('Invalid Comment');
    }
  }
}
