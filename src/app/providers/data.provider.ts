import { Injectable } from '@angular/core';
import { collection, collectionSnapshots, Firestore } from '@angular/fire/firestore';
import { PageSetting } from '../structures/method.structure';
import { UserData } from '../structures/user.structure';
import { Subject } from 'rxjs';
@Injectable()
export class DataProvider{
    public data:any;
    public pageSetting:PageSetting={
        blur:false,
        lastRedirect:'',
        message:'',
        spinner:false,
        messageType:'Error'
    };
    public userData:UserData | undefined;
    public loggedIn:boolean = false;
    public gettingUserData:boolean = true;
    public userID:string | undefined;
    public verifyEmail:boolean | undefined;
    public reloadPage:boolean = false;
    public checkoutData:any;
    public shippingData:any;
    public dataOne:any;
    public dataTwo:any;
    public dataThree:any;
    public dataFour:any;
    public siteData:any = {};
    public routeSubject = new Subject(); // a subject to notify
    public currentRoute = this.routeSubject.asObservable();
    public startRouteAnimation:boolean = false;
    constructor(private firestore: Firestore){
        // setTimeout(()=>{
        //     this.startRouteAnimation = true;
        //     alert('Time ran out');
        // },5000);
        collectionSnapshots(collection(this.firestore,'siteData')).subscribe((data)=>{
            data.forEach((doc)=>{
                this.siteData[doc.id] = doc.data();
            })
        })
    }
}