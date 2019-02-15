import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
//service
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-updateprofiles',
  templateUrl: './updateprofiles.component.html',
  styleUrls: ['./updateprofiles.component.css']
})
export class UpdateprofilesComponent implements OnInit {

   //msj error
   msgerr: string = '';
   //msj ext
   msgex: string = '';
  //vars profile
  email:string = '';
  role:string = '';
  idUpdate:string = '';
  token:string = '';
  //form
  updateForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) { }

  ngOnInit() {
     //get data user from localstorage
     this.email = localStorage.getItem('email');
     this.role = localStorage.getItem('role');
     this.idUpdate = localStorage.getItem('idUpdate');
     this.token = localStorage.getItem('token');
     //init list table
     this.getUserId(this.idUpdate);
     this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  //get all users 
  getUserId(id) {
    //service get all users
    this.userService.getUserId(id, this.token)
    .subscribe(data => {
      //populated data to form
      this.updateForm = this.formBuilder.group({
        name: [data.data.name, Validators.required],
        surname: [data.data.surname, Validators.required],
        username: [data.data.email, Validators.required],
        password: ['', Validators.required],
        role: [data.data.role, Validators.required]
      });
    });
  }

  get f() { return this.updateForm.controls; }

  //onsubmit form to service register 
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.updateForm.invalid) {
      return;
    } else {

      //service
      this.userService.updateRegister( this.idUpdate, this.updateForm.value.name, this.updateForm.value.surname, this.updateForm.value.username, this.updateForm.value.password, this.updateForm.value.role , this.token)
        .subscribe(data => {
          //validate user 
          if (data.status == "SUCCESS") {
            //send to login
            this.router.navigate(['/profilesadmin']);
          }
        },
          //validate error login send msj
          (err) => { this.msgerr = 'Error The user already register'; }
        );
      
    }
  }

}
