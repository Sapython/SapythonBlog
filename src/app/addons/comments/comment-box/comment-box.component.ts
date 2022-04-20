import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from 'src/app/providers/data.provider';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { CommentService } from '../services/comment.service';
import { CommentData } from '../structures/commentData.type';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss'],
})
export class CommentBoxComponent implements OnInit {
  @Input() comment: CommentData = {
    id: '',
    comment: 'N/A',
    date: new Date(),
    flagged: false,
    flaggedMessage: '', 
    name: 'N/A',
    userId: 'N/A',
    userImage: 'N/A',
    replyAvailable: false,
    likedUsers: [],
    dislikedUsers: [],
  };
  @Input() lastColor: boolean = true;
  @Input() path: string[] = [];
  @Input() postId: string = '';
  @ViewChild('box') box: any;
  showReplyForm: boolean = false;
  showReplies: boolean = false;
  repliesFetched: boolean = false;
  comments: CommentData[] = [];
  fetchingReplies: boolean = false;
  currentCommentId: string = '';
  nextPath: string[] = [];
  liked: boolean = false;
  disliked:boolean = false;
  addingComment: boolean = false;
  actionWorking: boolean = false;
  commentForm: FormGroup = new FormGroup({
    comment: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(300),
    ]),
  });
  constructor(
    private commentService: CommentService,
    public dataProvider: DataProvider,
    private alertify: AlertsAndNotificationsService
  ) {}
  async getComments() {
    // console.log('Getting comments')
    let comments = await this.commentService.getReplyComments(
      this.postId,
      this.path
    );
    let finalComments: CommentData[] = [];
    comments.forEach((comment: any) => {
      let data = comment.data();
      data.id = comment.id;
      finalComments.push(data);
    });
    // console.log('Got comments',finalComments)
    return finalComments;
  }
  replyComment() {
    // console.log('comment parent',this.nextPath)
    console.log(this.nextPath.join('/replies/') + '/replies');
    if (this.commentForm.valid && this.nextPath.length > 0) {
      this.addingComment = true;
      const newCommentData: CommentData = {
        id: '',
        userId: this.dataProvider.userData?.userId || '',
        comment: this.commentForm.value.comment,
        name: this.dataProvider.userData?.displayName || '',
        date: new Date(),
        replyAvailable: false,
        userImage: this.dataProvider.userData?.photoURL || '',
        likedUsers: [],
        dislikedUsers: [],
        flagged: false,
        flaggedMessage: '',
      };
      this.commentService
        .addComment(this.postId, newCommentData, this.nextPath)
        .then(() => {
          this.comments.push(newCommentData);
          this.comment.replyAvailable = true;
          this.alertify.presentToast('Replied!');
          this.commentForm.reset();
          this.addingComment = false;
        })
        .catch(() => {
          this.alertify.presentToast('Cannot reply now!', 'error');
          this.addingComment = false;
        });
    } else {
      this.alertify.presentToast('Invalid Comment');
    }
  }
  showReply() {
    if (!this.showReplies && !this.repliesFetched) {
      this.fetchingReplies = true;
      this.getComments().then((commentData) => {
        this.showReplies = true;
        this.repliesFetched = true;
        console.log('Got comments', commentData);
        this.comments = commentData;
        this.fetchingReplies = false;
        this.showReplyForm = false;
      });
    } else if (!this.showReplies) {
      this.showReplies = true;
      this.showReplyForm = false;
    } else {
      this.showReplies = false;
    }
    // this.showReplies = !this.showReplies;
  }
  ngOnInit(): void {
    this.liked = this.comment.likedUsers.includes(this.dataProvider.userData?.userId || '');
    this.disliked = this.comment.dislikedUsers.includes(this.dataProvider.userData?.userId || '');
    console.log(
      'Comment',
      this.path,
      this.comment.id,
      this.comment.id in this.path
    );
    this.nextPath = this.path;
    if (!this.path.includes(this.comment.id)) {
      this.nextPath.push(this.comment.id);
    }
    console.log('Comment', this.nextPath);
  }
  getDate(date: any) {
    return date.toDate().toDateString();
  }
  async likeComment(event: any) {
    if (this.dataProvider.userData){
      this.actionWorking = true;
      if(this.comment.likedUsers.includes(this.dataProvider.userData.userId)){
        this.alertify.presentToast('Already liked!', 'error');
        this.actionWorking = false;
      } else if (this.comment.dislikedUsers.includes(this.dataProvider.userData.userId)){
        this.commentService.likeComment(this.postId, this.nextPath).then(() => {
          this.alertify.presentToast('Liked!');
        })
        await this.commentService.unDislikeComment(this.postId, this.nextPath);
        this.comment.likedUsers.push(this.dataProvider.userData.userId);
        this.comment.dislikedUsers.splice(this.comment.dislikedUsers.indexOf(this.dataProvider.userData.userId), 1);
        this.actionWorking = false;
      } else {
        await this.commentService.likeComment(this.postId, this.nextPath);
        this.comment.likedUsers.push(this.dataProvider.userData.userId);
        this.actionWorking = false;
      }
    }
  }
  async dislikeComment(event: any) {
    if (this.dataProvider.userData){
      this.actionWorking = true;
      if(this.comment.dislikedUsers.includes(this.dataProvider.userData.userId)){
        this.alertify.presentToast('Already disliked!', 'error');
        this.actionWorking = false;
      } else if (this.comment.likedUsers.includes(this.dataProvider.userData.userId)){
        await this.commentService.unlikeComment(this.postId, this.nextPath);
        await this.commentService.dislikeComment(this.postId, this.nextPath)
        this.alertify.presentToast('Disliked!');
        this.comment.dislikedUsers.push(this.dataProvider.userData.userId);
        this.comment.likedUsers.splice(this.comment.likedUsers.indexOf(this.dataProvider.userData.userId), 1);
        this.actionWorking = false;
      } else {
        this.comment.dislikedUsers.push(this.dataProvider.userData.userId);
        await this.commentService.dislikeComment(this.postId, this.nextPath);
        this.actionWorking = false;
      }
    }
  }
  reportComment(event: any) {
    this.commentService.flagComment(this.postId, this.nextPath).then(()=>{
      this.alertify.presentToast('Flagged!');
    }).catch(()=>{
      this.alertify.presentToast('Cannot flag now!', 'error');
    })
  }
}
