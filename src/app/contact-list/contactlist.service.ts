import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IContact} from './contact';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactlistService {

  private _contactListUrl = "http://api-contact-manager.herokuapp.com/contacts";

  constructor(private _http: Http) {}

  getContactsHttp(): Observable<IContact[]> {
    return this._http.get(this._contactListUrl).map((response: Response) => <IContact[]>response.json());
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || "Server Error");
  }


}
