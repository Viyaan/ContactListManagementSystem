import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  firstName:string;
  password:string;
  title:string
  
  
  constructor( private _router: Router) {}

  ngOnInit() {
  }
  
  authenticate():void{
    
    console.log(this.firstName);
    
    if(this.firstName=="user"&&this.password=="password"){
      console.log("success")
       this._router.navigate(['viewContacts']);
    }else{
      console.log("failure")
       this._router.navigate(['invalidPassword']);
    }
    
  }

}
