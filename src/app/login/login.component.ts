import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
//service
import { LoginService } from '../services/login.service';
//jwt
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //msj error
  msgerr: string = '';
  //msj ext
  msgex: string = '';
  //form
  loginForm: FormGroup;
  submitted = false;
  //list login
  listLogin: {};

  constructor(private formBuilder: FormBuilder, private logService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }

  //onsubmit form to service login 
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      //service
      this.logService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(data => {
          //validate user 
          if (data.auth_token != null) {
            let tokenInfo = this.getDecodedAccessToken(data.auth_token); // decode token
            //save data user
            localStorage.setItem('email', tokenInfo.email);
            localStorage.setItem('role', tokenInfo.role);
            localStorage.setItem('idUser', tokenInfo.user_id);
            //save to send to api rails request
            localStorage.setItem('token', data.auth_token);
            //send to home
            this.router.navigate(['/home']);
          }
        },
          //validate error login send msj
          (err) => { this.msgerr = 'Invalid username / password'; }
        );
    }
  }

  //decode token from api response
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

  goToRegister() {
    //send to register
    this.router.navigate(['/register']);
  }
  //close alert
  closeAlert(): void {
    this.msgerr = '';
  }
  //close alert
  closeAlertEx(): void {
    this.msgex = '';
  }
  //close 
  close() {
    //redirection to login
    this.router.navigate(["/"]);
  }

}
