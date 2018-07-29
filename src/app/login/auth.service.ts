import {Injectable} from '@angular/core';
import {User} from './user';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';


@Injectable()
export class AuthService {


  postUrl: string = "https://contactlistmanagement.herokuapp.com/users/auth";
  
  constructor(private _http: HttpClient,private _router: Router) {}

  getUserDetails(username, password): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };

    let body = JSON.stringify(new User(username, password));
    return this._http.post(this.postUrl, body, httpOptions).pipe(retry(3),
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
    return Observable.throw("Something bad happened; please try again later, Also check your username or password");
  };
  
  
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  
  getToken(){
    return localStorage.getItem('token')
  }
  
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['login']);
  }

}