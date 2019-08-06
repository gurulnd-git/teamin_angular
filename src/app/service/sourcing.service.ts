import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SourcingService {

  private initSourcingUrl = 'http://localhost:8000/user/initSourcing';
  private loadInitDataUrl = 'http://localhost:8000/user/loadInitData';
  private createSourceUrl = 'http://localhost:8000/user/createSource';
  private loadChartUrl = 'http://localhost:8000/user/loadChart';
  private addProgramUrl = 'http://localhost:8000/user/addProgram';
  private addProjectUrl = 'http://localhost:8000/user/addProject';
  private addRoleUrl = 'http://localhost:8000/user/addRole';


  public newSub = new Subject<any>();

  constructor(private http: Http) {}

  loadSourcings(): Observable<any> {
    const header = new Headers();
    header.append('Content-Type', 'application/json; charset=utf-8');
    header.append('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    header.append('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
    header.append('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');

    const options = new RequestOptions({ headers: header});
    return this.http.post(this.initSourcingUrl, {} , options)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  loadChart(): Observable<any> {
    const header = new Headers();
    header.append('Content-Type', 'application/json; charset=utf-8');
    header.append('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    header.append('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
    header.append('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');

    const options = new RequestOptions({ headers: header});
    return this.http.post(this.loadChartUrl, {} , options)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  loadInitData(): Observable<any> {
    const header = new Headers();
    header.append('Content-Type', 'application/json; charset=utf-8');
    header.append('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    header.append('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
    header.append('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');

    const options = new RequestOptions({ headers: header});
    return this.http.post(this.loadInitDataUrl, {} , options)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  createSource(data): Observable<any> {
    const header = new Headers();
    header.append('Content-Type', 'application/json; charset=utf-8');
    header.append('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    header.append('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
    header.append('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');

    const options = new RequestOptions({ headers: header});
    return this.http.post(this.createSourceUrl, data , options)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  createProgram(data): Observable<any> {
    const header = new Headers();
    header.append('Content-Type', 'application/json; charset=utf-8');
    header.append('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    header.append('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
    header.append('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');

    const options = new RequestOptions({ headers: header});
    return this.http.post(this.addProgramUrl, data , options)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }
  createProject(data): Observable<any> {
    const header = new Headers();
    header.append('Content-Type', 'application/json; charset=utf-8');
    header.append('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    header.append('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
    header.append('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');

    const options = new RequestOptions({ headers: header});
    return this.http.post(this.addProjectUrl, data , options)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }
  createRole(data): Observable<any> {
    const header = new Headers();
    header.append('Content-Type', 'application/json; charset=utf-8');
    header.append('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
    header.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    header.append('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
    header.append('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');

    const options = new RequestOptions({ headers: header});
    return this.http.post(this.addRoleUrl, data , options)
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
