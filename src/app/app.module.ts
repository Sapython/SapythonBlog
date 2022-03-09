import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { WidgetsModule } from './shared/widgets/widgets.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataProvider } from './providers/data.provider';
import { DatabaseService } from './services/database.service';
import { AuthencationService } from './services/authencation.service';
import { UserDataService } from './services/user-data.service';
import { MessagingService } from './services/messaging.service';
import { AlertsAndNotificationsService } from './services/uiService/alerts-and-notifications.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EmailBasedDialogComponent } from './models/login/email-based-dialog/email-based-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,EmailBasedDialogComponent],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    AppRoutingModule,
    ScullyLibModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    WidgetsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    NoopAnimationsModule,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    DataProvider,
    DatabaseService,
    AuthencationService,
    UserDataService,
    MessagingService,
    AlertsAndNotificationsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
