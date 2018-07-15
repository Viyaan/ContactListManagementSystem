import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IContact} from '../contact-list/contact';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
   public contactTel;
  public contactEmail;
  public contactName;

 constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {

    this._route
      .queryParams
      .subscribe((params) => {
        this.contactTel = params['contactTel'];
         this.contactEmail = params['contactEmail'];
        this.contactName = params['contactName'];

      })
  }
}