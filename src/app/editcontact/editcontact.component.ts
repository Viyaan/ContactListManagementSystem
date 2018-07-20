import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IContact} from '../contact-list/contact';
import {UserformService} from '../editcontact/services/userform.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
  public contactTel;
  public contactEmail;
  public contactName;
  public contactAdd;
  public face;
  
  public contact: IContact

 constructor(private _route: ActivatedRoute, private _router: Router, private userService: UserformService ) {}

  ngOnInit() {

    this._route
      .queryParams
      .subscribe((params) => {
        this.contactTel = params['contactTel'];
         this.contactEmail = params['contactEmail'];
        this.contactName = params['contactName'];
        this.contactAdd = params['address'];
        this.face = params['face'];
        this.contact = new IContact('',this.contactName,this.contactEmail,this.contactTel,this.contactAdd,this.face);

      }) 
  } 
  
  
  editUser(form:NgForm){
    console.log('contact '+this.contact);
    this.userService.postUser(this.contact).subscribe( (data) => console.log('Success', data)
                                                      ,(err) => console.log('Error', err));
   
  }
}