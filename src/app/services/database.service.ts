import { Injectable } from '@angular/core';
import { Firestore, arrayUnion,addDoc, collectionData,DocumentReference, CollectionReference , collection , setDoc, doc, updateDoc, deleteDoc, docSnapshots, docData, getDoc } from '@angular/fire/firestore';
import { ContactRequest } from '../structures/user.structure';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  contactDoc:CollectionReference;
  constructor(private fs: Firestore) { 
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
  updateUserMessageToken(userId:string,messageToken:string){
    return updateDoc(doc(this.fs,'users/'+userId),{messageToken:messageToken})
  }
  enableNotification(userId:string){
    return updateDoc(doc(this.fs,'siteData/'+userId),{users:arrayUnion(userId)})
  }
  disableNotification(userId:string){
    return updateDoc(doc(this.fs,'siteData/'+userId),{users:arrayUnion(userId)})
  }
  
  
}
