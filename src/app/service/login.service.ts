import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import {Router} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};
@Injectable()
export class LoginService {

  users: User[] = [];
  private LoginUrl = 'http://localhost:8000/login';
  constructor(private http: Http) {}

  authUser(userDetails): Observable<any> {
    const userDetailsRequest = JSON.stringify(userDetails);
    console.log(userDetailsRequest);
    const header = new Headers();
    header.append('Content-Type', 'application/json; charset=utf-8');
    header.append('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    header.append('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
    header.append('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');

    const options = new RequestOptions({ headers: header});
    return this.http.post(this.LoginUrl, userDetailsRequest, options)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
      }

  private extractData(res: Response) {
    const body = res.json();
          return body;
      }
}
