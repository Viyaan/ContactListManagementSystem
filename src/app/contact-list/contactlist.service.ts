import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {IContact} from './contact';
import {Observable, Subject} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class ContactlistService {

  private _contactListUrl = "https://contactlistmanagement.herokuapp.com/contacts";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };

  constructor(private _http: HttpClient) {}

  getContactsHttp(): Observable<IContact[]> {

    return this._http.get(this._contactListUrl, this.httpOptions).pipe(retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return Observable.throw("Something bad happened; please try again later");
  };

  deleteContactWithId(key: string, val: string): Observable<any> {
    return this._http
      .delete(this._contactListUrl + "/" + val, this.httpOptions).pipe(retry(3),
      catchError(this.handleError)
    );
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}
