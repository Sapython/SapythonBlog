import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }
  passwordVisible:boolean = false;
  signupForm:FormGroup = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    confirmPassword:new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
  },{validators:this.checkPasswords});
  constructor(private authService:AuthenticationService,private alertify:AlertsAndNotificationsService) { }

  ngOnInit(): void {
    console.log('signup');
  }
  signup(){
    if (this.signupForm.valid) {
      if (this.signupForm.value.password === this.signupForm.value.confirmPassword) {
        this.authService.signUpWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.name);
      } else {
        this.alertify.presentToast('Passwords do not match','error');
      }
    }
  }
  loginWithGoogle(){this.authService.signInWithGoogle();}
  loginWithFacebook(){this.authService.signInWithFacebook();}
  loginWithGithub(){this.authService.signInWithGithub();}
}
