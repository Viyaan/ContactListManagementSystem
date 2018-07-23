import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {User} from '../login/user';

@Injectable()
export class AuthService {


  postUrl: string = "https://contactlistmanagement.herokuapp.com/auth/users";


  constructor(private _http: Http) {}


  getUserDetails(username, password): Observable<any> {

    let body = JSON.stringify(new User(username, password));
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});


    return this._http.post(this.postUrl, body, options).map(this.extractData).catch(this.handlerError);

  }


  private extractData(res: Response) {
    let body = res.json();
    return body.fields || {};

  }

  private handlerError(error: any) {
    return Observable.throw(error.statusText);
  }

}