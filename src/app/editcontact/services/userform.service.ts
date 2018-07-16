import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IContact} from '../../contact-list/contact';
import 'rxjs/Rx';


@Injectable()
export class UserformService {

  constructor(private http:Http) { }
  
  postUrl:string ="/postUserInfo"
  private extractData(res:Response){
    let body = res.json();
    return body.fields || { };
    
  }
  
  private handlerError(error: any){
    return Observable.throw(error.statusText);
  }
  
  postUser(user: IContact):Observable<any>{ 
    
    console.log("user in service "+JSON.stringify(user));
    let body = JSON.stringify(user);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.postUrl,body,options).map(this.extractData).catch(this.handlerError);
  }

}
 