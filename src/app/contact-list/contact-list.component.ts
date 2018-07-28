import { Component, OnInit } from '@angular/core';
import {IContact} from './contact';
import {ContactlistService} from './contactlist.service';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { PagerService } from './pager.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactLists: IContact[];
  errorMessage: string;
  pager: any = {};
  pagedItems: any[];
  filterContact ='';

  constructor(private _contactService: ContactlistService, private _router: Router,private _route: ActivatedRoute,private pagerService: PagerService) { }

  ngOnInit(): void {
     // this.contacts = this._contactService.getContactsNative();
    this._contactService.getContactsHttp().subscribe((contacts) => {this.contactLists = contacts, this.setPage(1);
                                                                     (error) => this.errorMessage = error });
  }
  
  getContacts() {
    this._contactService.getContactsHttp().subscribe((contacts) => {this.contactLists = contacts, this.setPage(1);
                                                                     (error) => this.errorMessage = error });
  }
  

  editContact(contact: IContact): void {
    
    this._router.navigate(['edit'], { queryParams: { "id": contact._id, "contactTel": contact.tel , "contactEmail" : contact.email, "contactName": contact.name, "address": contact.add,"face":contact.faceId} }); 
  }

  removeContact(contact: IContact):void{

   this._contactService.deleteContactWithId("id",contact._id).subscribe((contacts) => {
                                                                                       this.contactLists = contacts
                                                                                       this.getContacts();
                                                                                      },
                                                                        (error) => this.errorMessage = error);
    
  }
  
  
   setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.contactLists.length, page);

        // get current page of items
        this.pagedItems = this.contactLists.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }


}
