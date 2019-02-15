import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as swal from 'sweetalert';
//service
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-profilesadmin',
  templateUrl: './profilesadmin.component.html',
  styleUrls: ['./profilesadmin.component.css']
})
export class ProfilesadminComponent implements OnInit {
  //vars profile
  email: string = '';
  role: string = '';
  token: string = '';
  //list users
  listUsers: {};
  //msj error
  msgerr: string = '';
  //msj ext
  msgex: string = '';
  //form
  updateForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) { }

  ngOnInit() {
    //get data user from localstorage
    this.email = localStorage.getItem('email');
    this.role = localStorage.getItem('role');
    this.token = localStorage.getItem('token');
    //init list table
    this.getUsers();
  }

  //get all users 
  getUsers() {
    //service get all users
    this.userService.getUsers(this.token)
      .subscribe(data => {
        //populated list users
        this.listUsers = data;
      });
  }

  //update
  update(id) {
    console.log(id)
    //save id update
    localStorage.setItem('idUpdate', id);
    //send to home
    this.router.navigate(['/updateprofiles']);
  }

  //delete for id
  delete(id) {
    //validation confirm
    if (window.confirm('Esta seguro de eliminar este empleado?')) {
      //service
      this.userService.deleteRegister(id,this.token)
        .subscribe(data => {
          //validate data 
          if (data.status == "SUCCESS") {
            //obtain users
            this.getUsers();
          }
        },
          //validate error login send msj
          (err) => { this.msgerr = 'Error el usuario no fue eliminado'; }
        );
    }
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
