import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';    
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class IntroandexitService {

  constructor(private http: Http) { }

    //service to rails api to get entry and exit of employees 
    getIntoOrExit(token){
      let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
      let options = new RequestOptions({ headers: headers }); 
      return this.http.get('http://localhost:3000/inputandoutput/get/', options)  
              .map((response: Response) =>response.json())              
    }

    
    //service to rails api to get entry and exit of employees for id 
    getIntoOrExitId(id, token){ 
    var body = {
        "id": id
    };
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/inputandoutput/getId/', body, options)  
            .map((response: Response) =>response.json())              
  }

  //service to rails api to register entry an exit employees data 
  register(user_id, date, observation, token){ 
    var body = {
        "user_id": user_id,
        "date": date,
        "observation": observation
    };
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/inputandoutput', body, options)  
            .map((response: Response) =>response.json())              
  }


}
