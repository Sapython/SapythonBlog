import { Injectable } from '@angular/core';
import { collection, collectionSnapshots, Firestore } from '@angular/fire/firestore';
import { PageSetting } from '../structures/method.structure';
import { UserData } from '../structures/user.structure';

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
    constructor(private firestore: Firestore){
        collectionSnapshots(collection(this.firestore,'siteData')).subscribe((data)=>{
            data.forEach((doc)=>{
                this.siteData[doc.id] = doc.data();
            })
        })
    }
}