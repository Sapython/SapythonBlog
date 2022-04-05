import { Injectable } from '@angular/core';
import { addDoc, doc, updateDoc, collection, Firestore, getDocs } from '@angular/fire/firestore';
import { CommentData } from '../structures/commentData.type';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private firestore:Firestore) { }
  getComments(){
    return getDocs(collection(this.firestore,'comments'));
  }
  getReplyComments(id:string[]){
    let path = (id.join('/replies/'));
    return getDocs(collection(this.firestore,'comments/'+path+'/replies'));
  }
  async addComment(data:CommentData,id?:string[]){
    if (id && id.length > 0){
      let path = (id.join('/replies/'));
      let response = await addDoc(collection(this.firestore,'comments/'+path+'/replies'),data);
      await updateDoc(doc(this.firestore,'comments/'+path),{replyAvailable:true});
      return response;
    } else {
      return addDoc(collection(this.firestore,'comments'),data)
    }
  }
  likeComment(id:string){
    console.log(id)
    // return this.firestore.doc('comments/'+id).update({likes:this.firestore.FieldValue.increment(1)})
  }
}
