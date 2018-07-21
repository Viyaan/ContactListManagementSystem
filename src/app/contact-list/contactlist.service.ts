import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IContact} from './contact';
import 'rxjs/Rx';

@Injectable()
export class ContactlistService {

  private _contactListUrl = "https://contactlistmanagement.herokuapp.com/contacts";

  private _deleteUrl = '';

  headers: Headers;
  options: RequestOptions;

  constructor(private _http: Http) {

    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({headers: this.headers});
  }

  getContactsHttp(): Observable<IContact[]> {
    return this._http.get(this._contactListUrl).map((response: Response) => <IContact[]>response.json()).catch(this.handleError)
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || "Server Error");
  }


  deleteContactWithId(key: string, val: number): Observable<any> {
    return this._http
      .delete(this._deleteUrl + "/?" + key + "=" + val, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}
