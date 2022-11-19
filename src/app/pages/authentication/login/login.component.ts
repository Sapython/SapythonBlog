import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  passwordFocus:boolean = false;
  emailFocus:boolean = false;
  constructor(private authService:AuthenticationService,private alertify:AlertsAndNotificationsService) { }
  passwordVisible:boolean = false;
  loginForm:FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email,Validators.minLength(6)]),
    password:new FormControl('', [Validators.required,Validators.minLength(6)]),
  });
  login(){
    if (this.loginForm.valid) {
      this.authService.loginEmailPassword(this.loginForm.value.email, this.loginForm.value.password).then(()=>{});
    } else {
      this.alertify.presentToast('Invalid email or password');
    }
  }
  loginWithGoogle(){this.authService.signInWithGoogle();}
  loginWithFacebook(){this.authService.signInWithFacebook();}
  loginWithGithub(){this.authService.signInWithGithub();}
  logEvent(event:any){
    console.log(event);
  }
  ngAfterViewInit(): void {
    console.log(this.loginForm);
  }
}
