import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
//service
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   //msj error
   msgerr: string = '';
   //msj ext
   msgex: string = '';
   //form
   registerForm: FormGroup;
   submitted = false;
   //list register
   listRegister: {};

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  //onsubmit form to service register 
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      //service
      this.registerService.createRegister(this.registerForm.value.name, this.registerForm.value.surname, this.registerForm.value.username, this.registerForm.value.password, this.registerForm.value.role)
        .subscribe(data => {
          //validate user 
          if (data.status == "User created successfully") {
            //send to login
            this.router.navigate(['/']);
          }
        },
          //validate error login send msj
          (err) => { this.msgerr = 'Error The user already register'; }
        );
    }
  }

  goToLogin() {
    //send to login
    this.router.navigate(['/']);
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
