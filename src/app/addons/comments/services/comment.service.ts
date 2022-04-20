import { Injectable } from '@angular/core';
import { addDoc, doc, updateDoc, collection, Firestore, getDocs, getDoc } from '@angular/fire/firestore';
import { arrayRemove, arrayUnion, increment } from 'firebase/firestore';
import { DataProvider } from 'src/app/providers/data.provider';
import { CommentData } from '../structures/commentData.type';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private firestore:Firestore,private dataProvider:DataProvider) { }
  getComments(postId:string){
    return getDocs(collection(this.firestore,'posts/'+postId+'/comments'));
  }
  getReplyComments(postId:string,id:string[]){
    let path = (id.join('/replies/'));
    return getDocs(collection(this.firestore,'posts/'+postId+'/comments/'+path+'/replies'));
  }
  async addComment(postId:string,data:CommentData,id?:string[]){
    if (id && id.length > 0){
      let path = (id.join('/replies/'));
      let response = await addDoc(collection(this.firestore,'posts/'+postId+'/comments/'+path+'/replies'),data);
      await updateDoc(doc(this.firestore,'posts/'+postId+'/comments/'+path),{replyAvailable:true});
      return response;
    } else {
      return addDoc(collection(this.firestore,'posts/'+postId+'/comments'),data)
    }
  }
  getComment(postId:string,id:string[]){
    let path = (id.join('/replies/'));
    return getDoc(doc(this.firestore,'posts/'+postId+'/comments/'+path));
  }
  likeComment(postId:string,id:string[]){
    let path = (id.join('/replies/'));
    return updateDoc(doc(this.firestore,'posts/'+postId+'/comments/'+path),{likedUsers:arrayUnion(this.dataProvider.userData?.userId)});
  }
  dislikeComment(postId:string,id:string[]){
    let path = (id.join('/replies/'));
    return updateDoc(doc(this.firestore,'posts/'+postId+'/comments/'+path),{dislikedUsers:arrayUnion(this.dataProvider.userData?.userId)});
  }
  unlikeComment(postId:string,id:string[]){
    let path = (id.join('/replies/'));
    return updateDoc(doc(this.firestore,'posts/'+postId+'/comments/'+path),{likedUsers:arrayRemove(this.dataProvider.userData?.userId)});
  }
  unDislikeComment(postId:string,id:string[]){
    let path = (id.join('/replies/'));
    return updateDoc(doc(this.firestore,'posts/'+postId+'/comments/'+path),{dislikedUsers:arrayRemove(this.dataProvider.userData?.userId)});
  }
  flagComment(postId:string,id:string[]){
    let path = (id.join('/replies/'));
    return updateDoc(doc(this.firestore,'posts/'+postId+'/comments/'+path),{flagged:true});
  }
}
