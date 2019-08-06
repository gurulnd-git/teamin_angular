import { Component, ViewChild } from '@angular/core';
import { User } from '../../../app/model/user.model';
import { LoginService } from '../../service/login.service';
import { Router, NavigationExtras } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
// import { NgForm } from '@angular/forms/src/directives/ng_form';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  pass = '';
  status: string;
  navigationExtras: NavigationExtras;
  // @ViewChild('userlogin') userlogin: NgForm ;

  constructor(private loginService: LoginService, private route: Router) {}

  login(data) {
    this.loginService.authUser(data).subscribe(response => {
      console.log('response' + response);
     this.status = response.authMessage;
     console.log(response.authMessage);
     this.navigationExtras = response;

     if (this.status === 'Logged In') {
       console.log('success');
       this.route.navigate(['home'], this.navigationExtras);
     } else {
       window.alert('Enter valid credentials');
     }
    });
  }

}
