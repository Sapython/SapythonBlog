import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  subscribing:boolean = false;
  subscribeForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email])
  })
  constructor(private databaseService:DatabaseService,private alertify:AlertsAndNotificationsService) { }
  subscribe(){
    console.log(this.subscribeForm.value);
    if(this.subscribeForm.valid){
      this.subscribing = true;
      this.databaseService.subscribeEmail(this.subscribeForm.value.email).then(()=>{
        this.subscribing = false;
        this.subscribeForm.reset();
        this.alertify.presentToast('Subscribed Successfully');
      }).catch(()=>{
        this.subscribing = false;
        this.alertify.presentToast('Cannot subscribe','error');
      });
    } else {
      console.log('invalid');
      this.alertify.presentToast('Invalid Email','error');
    }
  }
}
