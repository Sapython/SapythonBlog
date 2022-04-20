import { Injectable } from '@angular/core';
import { Firestore, arrayUnion,addDoc, collectionData,DocumentReference, CollectionReference , collection , setDoc, doc, updateDoc, deleteDoc, docSnapshots, docData, getDoc } from '@angular/fire/firestore';
import { arrayRemove, increment } from 'firebase/firestore';
import { DataProvider } from '../providers/data.provider';
import { ContactRequest } from '../structures/user.structure';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  contactDoc:CollectionReference;
  constructor(private fs: Firestore,private dataProvider:DataProvider) { 
    this.contactDoc = collection(this.fs,'contactRequests');
  }
  addContactRequest(name: string, email: string,phoneNumber:string,message: string){
    let data:ContactRequest = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
      date: new Date(),
    }
    addDoc(this.contactDoc,data).then((doc)=>{
      console.log(doc);
      console.log(doc.id)
    })
  }
  markFavorite(postId:string){
    return updateDoc(doc(this.fs,'users/'+this.dataProvider.userID),{favorites:arrayUnion(postId)});
  }
  unMarkFavorite(postId:string){
    return updateDoc(doc(this.fs,'users/'+this.dataProvider.userID),{favorites:arrayUnion(postId)});
  }
  likePost(postId:string){
    updateDoc(doc(this.fs,'posts/'+postId),{likes:increment(1)});
    return updateDoc(doc(this.fs,'users/'+this.dataProvider.userID),{likedPost:arrayUnion(postId)});
  }
  dislikePost(postId:string){
    updateDoc(doc(this.fs,'posts/'+postId),{dislikes:increment(1)});
    return updateDoc(doc(this.fs,'users/'+this.dataProvider.userID),{dislikedPost:arrayUnion(postId)});
  }
  unlikePost(postId:string){
    updateDoc(doc(this.fs,'posts/'+postId),{likes:increment(-1)});
    return updateDoc(doc(this.fs,'users/'+this.dataProvider.userID),{likedPost:arrayRemove(postId)});
  }
  unDislikePost(postId:string){
    updateDoc(doc(this.fs,'posts/'+postId),{dislikes:increment(-1)});
    return updateDoc(doc(this.fs,'users/'+this.dataProvider.userID),{dislikedPost:arrayRemove(postId)});
  }
}
