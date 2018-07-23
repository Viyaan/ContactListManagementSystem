import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {User} from '../login/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  title: string


  constructor(private _router: Router, private auth: AuthService) {}

  ngOnInit() {
  }

  loginUser(): void {

    this.auth.getUserDetails(this.userName, this.password).subscribe((role) => {
      if (role === 'USER') {
        this._router.navigate(['viewContacts'])
      } else if (role === 'ADMIN') {
        this._router.navigate(['viewUsers'])

      }
    }
    , (err) => console.log('Error', err));



    if (this.userName === "user" && this.password === "password") {
      console.log("success")
      this._router.navigate(['viewContacts']);
    } else {
      console.log("failure")
      this._router.navigate(['invalidPassword']);
    }

  }

}
