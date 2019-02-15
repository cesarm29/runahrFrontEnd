import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
//service
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //vars profile
  email:string = '';
  role:string = '';
  idUser:string = '';
  token:string = '';
  //list user
  nameUser:string = '';
  surnameUser:string = '';
  emailUser:string = '';
  roleUser:string = '';

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
    //get data user from localstorage
    this.email = localStorage.getItem('email');
    this.role = localStorage.getItem('role');
    this.idUser = localStorage.getItem('idUser');
    this.token = localStorage.getItem('token');
    //init list table
    this.getUserId(this.idUser);
 }

 //get user for id 
 getUserId(idUser) {
  //service get user for id
  this.userService.getUserId(idUser, this.token)
  .subscribe(data => {
    //populated vars user
    this.nameUser = data.data.name;
    this.surnameUser = data.data.surname;
    this.emailUser = data.data.email;
    this.roleUser = data.data.role;
  });
}

}
