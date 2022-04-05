import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService:AuthenticationService,private alertify:AlertsAndNotificationsService) { }
  passwordVisible:boolean = false;
  loginForm:FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required]),
  });
  login(){
    if (this.loginForm.valid) {
      this.authService.loginEmailPassword(this.loginForm.value.email, this.loginForm.value.password).then(()=>{});
    }
  }
  loginWithGoogle(){this.authService.signInWithGoogle();}
  loginWithFacebook(){this.authService.signInWithFacebook();}
  loginWithGithub(){this.authService.signInWithGithub();}

}
