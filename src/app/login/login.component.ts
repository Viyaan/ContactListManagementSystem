import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {User} from '../login/user';
import * as jwt_decode from "jwt-decode"; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  title: string
  errorMessage: string
  role:string

  constructor(private _router: Router, private auth: AuthService) {}

  ngOnInit() {
  }

   getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){ 
    console.log(Error)
        return null;
    }
  }
    
  loginUser(): void {

    this.auth.getUserDetails(this.userName, this.password).subscribe((res) => { 
      this.role = this.getDecodedAccessToken(res.token).userrole;
      localStorage.setItem('token', res.token);
      if (this.role === 'USER') {
        this._router.navigate(['viewContacts'])
      } else if (this.role === 'ADMIN') {
        this._router.navigate(['viewUsers'])
      } else if (this.role) {
        this.errorMessage = this.role;
      }
    }
      , (err) => this.handleError(err));
  }

  handleError(err: string): void {
    this.errorMessage = err;
  }

}

