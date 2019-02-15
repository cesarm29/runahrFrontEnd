import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';    
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  //service to rails api to login 
  createRegister(name, surname,email,password,role){ 
    var body = {
      "user": {
        "name": name,
        "surname": surname,
        "email": email,
        "password": password,
        "role": role,
        "password_confirmation": password
      }
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/users', body, options)  
            .map((response: Response) =>response.json())              
  }
}
