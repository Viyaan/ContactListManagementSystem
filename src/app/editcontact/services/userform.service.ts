import {Injectable} from '@angular/core';
import {IContact} from '../../contact-list/contact';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';


@Injectable()
export class UserformService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };
  constructor(private _http: HttpClient) {}

  postUrl: string = "https://contactlistmanagement.herokuapp.com/contacts";

  postUser(user: IContact): Observable<any> {
    let body = JSON.stringify(user);
    return this._http.post(this.postUrl, body, this.httpOptions).pipe(retry(3), 
      catchError(this.handleError)
    );
  }
  putUser(user: IContact): Observable<any> {

    let body = JSON.stringify(user);
    return this._http.put(this.postUrl + "/" + user._id, body, this.httpOptions).pipe(retry(3),
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
    return Observable.throw("Something bad happened; please try again later," + error.message);
  };

}
