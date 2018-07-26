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

    this.auth.getUserDetails(this.userName, this.password).subscribe((role) => { console.log(role)
      if (role.userrole === 'USER') {
        this._router.navigate(['viewContacts'])
      } else if (role.userrole === 'ADMIN') {
        this._router.navigate(['viewUsers'])
      }else if(role.message){
         this._router.navigate(['invalidPassword'])
      }
    }
      , (err) => console.log('Error', err));
  }
}
