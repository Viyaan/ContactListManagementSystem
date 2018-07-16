import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IContact} from './contact';
import 'rxjs/Rx';

@Injectable()
export class ContactlistService {

  private _contactListUrl = "http://api-contact-manager.herokuapp.com/contacts";

  constructor(private _http: Http) {}

  getContactsHttp(): Observable<IContact[]> {
     return this._http.get(this._contactListUrl).map((response: Response) => <IContact[]>response.json()).catch(this.handleError)
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || "Server Error");
  }



  getContactsNative(): IContact[] {
    return [
      {
        'id': 1,
        'name': 'Terrence S. Hatfield',
        'tel': '651-603-1723',
        'email': 'TerrenceSHatfield@rhyta.com',
        "add":"address",
        'faceId': ""
      }, {
        'id': 2,
        'name': 'Chris M. Manning',
        'tel': '513-307-5859',
        'email': 'ChrisMManning@dayrep.com',
         "add":"address",
        'faceId': ""
      }
    ]
  }



}
