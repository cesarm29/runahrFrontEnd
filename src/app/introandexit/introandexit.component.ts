import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
//service
import { UsersService } from '../services/users.service';
import { IntroandexitService } from '../services/introandexit.service';


@Component({
  selector: 'app-introandexit',
  templateUrl: './introandexit.component.html',
  styleUrls: ['./introandexit.component.css']
})
export class IntroandexitComponent implements OnInit {

  //vars profile
  email: string = '';
  role: string = '';
  observacion: string = '';
  token: string = '';
  //msj error
  msgerr: string = '';
  //msj ext
  msgex: string = '';
  //list users
  listUsers: {};

  constructor(private userService: UsersService, private introandexitService: IntroandexitService, private router: Router) { }

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

  //entry employees
  entry(id) {
    //observation
    this.observacion = 'Entrada';
    //date now
    let date = new Date();
    //service register entry or exit employees
    this.introandexitService.register(id, date, this.observacion, this.token)
      .subscribe(data => {
        //validation
        if (data.status == "Input or Output created successfully") {
          //msj
          this.msgex = "Registro de Ingreso Exitoso";
        }
        //validation
        if (data.status == "Error the entry or exit was already registered for this user") {
          //msj error
          this.msgerr = "El ingreso para el empleado el dia de hoy ya fue registrado ";
        }
      },
      //validate error 
      (err) => { this.msgerr = 'Error al tratar de realizar el registro'; }
    );
  }

  //exit employees
  exit(id) {
    //observation
    this.observacion = 'Salida';
    //date now
    let date = new Date();
    //service register entry or exit employees
    this.introandexitService.register(id, date, this.observacion, this.token)
      .subscribe(data => {
        //validation
        if (data.status == "Input or Output created successfully") {
          //msj
          this.msgex = "Registro de Salida Exitoso";
        }
        //validation
        if (data.status == "Error the entry or exit was already registered for this user") {
          //msj error
          this.msgerr = "La salida para el empleado el dia de hoy ya fue registrada ";
        } 
      },
      //validate error 
      (err) => { this.msgerr = 'Error al tratar de realizar el registro'; }
    );
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
