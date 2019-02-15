import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';    
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  //service to rails api to login 
  login(email, password){ 
    var body = {
    "email": email,
    "password": password
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/users/login/', body, options)  
            .map((response: Response) =>response.json())              
  }


}
