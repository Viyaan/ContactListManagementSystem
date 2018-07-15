import { Component, OnInit } from '@angular/core';
import {IContact} from './contact';
import {ContactlistService} from './contactlist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Observable<IContact[]>;
  errorMessage: string;

  constructor(private _contactService: ContactlistService) { }

  ngOnInit(): void {
    this.contacts = this._contactService.getContactsHttp();
  }

}
