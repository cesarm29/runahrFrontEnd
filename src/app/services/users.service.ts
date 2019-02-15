import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';    
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  //service to rails api to get users index
  getUsers(token){
    var body = {
      "id": "empleado" 
    }; 
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token  });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/users/get/',body, options)  
            .map((response: Response) =>response.json())              
  }

  //service to rails to get user for id
  getUserId(idUser, token){ 
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.get('http://localhost:3000/users/'+idUser, options)  
            .map((response: Response) =>response.json())              
  }

  //service to rails api to update data user 
  updateRegister(id, name, surname, email, password, role, token){ 
    var body = {
      "user": {
        "id": id,
        "name": name,
        "surname": surname,
        "email": email,
        "password": password,
        "role": role,
        "password_confirmation": password
      }
    };
    let headers = new Headers({ 'Content-Type': 'application/json' , 'Authorization': token });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.put('http://localhost:3000/users/update', body, options)  
            .map((response: Response) =>response.json())              
  }

  //service to rails to delete register for id
  deleteRegister(idUser, token){ 
      var body = {
          "id": idUser,
      };
      let headers = new Headers({ 'Content-Type': 'application/json' , 'Authorization': token });
      let options = new RequestOptions({ headers: headers, body: body }); 
      return this.http.delete('http://localhost:3000/users/destroy/', options)  
              .map((response: Response) =>response.json())              
    }


}
