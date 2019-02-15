import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas'; 
//service
import { IntroandexitService } from '../services/introandexit.service';

@Component({
  selector: 'app-reportsuser',
  templateUrl: './reportsuser.component.html',
  styleUrls: ['./reportsuser.component.css']
})
export class ReportsuserComponent implements OnInit {

  email: string = '';
  role: string = '';
  idUser: string = '';
  token: string = '';
  //list employees
  listEmployees: {};
  //msj error
  msgerr: string = '';
  //msj ext
  msgex: string = '';

  constructor(private formBuilder: FormBuilder, private introandexitService: IntroandexitService, private router: Router) { }

  ngOnInit() {
    //get data user
    this.email = localStorage.getItem('email');
    this.role = localStorage.getItem('role');
    this.idUser = localStorage.getItem('idUser');
    this.token = localStorage.getItem('token');
    //init populate table
    this.getIntoOrExit();
  }

  //get all into or exit employees 
  getIntoOrExit() {
    //service get all users
    this.introandexitService.getIntoOrExitId(this.idUser,this.token)
      .subscribe(data => {
        //populated list intro or exit employees
        this.listEmployees = data;
      });
  }

  public generatePDF() { 
    var data = document.getElementById('contentToConvert'); 
    html2canvas(data).then(canvas => { 
    // Few necessary setting options 
    var imgWidth = 208; 
    var pageHeight = 295; 
    var imgHeight = canvas.height * imgWidth / canvas.width; 
    var heightLeft = imgHeight; 
    
    const contentDataURL = canvas.toDataURL('image/png') 
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
    var position = 0; 
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight) 
    pdf.save('reporteAdmin.pdf'); // Generated PDF  
    }); 
    } 

}
