import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IContact} from '../contact-list/contact';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
   public contact: IContact;

 constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {

    this._route
      .queryParams
      .subscribe((params) => {
        this.contact = params['contact'];
        console.log("param" +this.contact.email);

      })
  }
}