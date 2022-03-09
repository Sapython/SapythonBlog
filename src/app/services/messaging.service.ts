import { Injectable } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { Messaging, getToken, getMessaging, onMessage, FcmOptions } from 'firebase/messaging';
import { DataProvider } from '../providers/data.provider';
import { DatabaseService } from './database.service';
import { AlertsAndNotificationsService } from './uiService/alerts-and-notifications.service';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  messaging = getMessaging();
  constructor(
    private databaseService: DatabaseService,
    private dataProvider: DataProvider,
    private alertify: AlertsAndNotificationsService,
    private updates: SwUpdate,
    private push: SwPush,
  ) {
    updates.available.subscribe(_ => updates.activateUpdate().then(() => {
      console.log('reload for update');
      document.location.reload();
    }));
    push.messages.subscribe(msg => console.log('push message', msg));
  }
  startNotificationService(){
    navigator.serviceWorker.getRegistration().then(reg => {
      getToken(this.messaging, {
        vapidKey:
          'BLIMFSWgXuuWE7r2LDUGDXDI6GvKd6Hgl-TXiiDpVNCH3q_2Ia1bsg6sDaKc_Rs_YF5DoRGeqEQoFlRAqBQn358',
          serviceWorkerRegistration:reg
      }).then((token) => {
        console.log(token);
        if(token){
          if (this.dataProvider.userData?.userId) {
            this.databaseService
              .updateUserMessageToken(this.dataProvider.userData!.userId, token)
              .then(() => {
                this.alertify.presentToast('Token updated');
              });
          }
          onMessage(this.messaging,(payload)=>{
            console.log('Messaging ',payload);
          });
        } else {
          Notification.requestPermission().then((permission) => {
            console.log(permission);  
            if (permission === 'granted') {
              this.alertify.presentToast('Permission granted');
            } else {
              this.alertify.presentToast('Permission denied');
            }
          })
        }
      }).catch((err) => {
        console.log(err);
  
      });
    })
  }
}
