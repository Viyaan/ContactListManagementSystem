import { Component, OnInit } from '@angular/core';
import {IContact} from './contact';
import {ContactlistService} from './contactlist.service';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactLists: IContact[];
  errorMessage: string;

  constructor(private _contactService: ContactlistService, private _router: Router) { }

  ngOnInit(): void {
     // this.contacts = this._contactService.getContactsNative();
    this.contactLists = this._contactService.getContactsHttp().subscribe((contacts) => this.contactLists = contacts, 
                                                                     (error) => this.errorMessage = error);
  }
  
  editContact(): void {
    console.log("edit")
     this._router.navigate(['edit']);
  }

}
