import { PagerService } from '../contact-list/pager.service';
import { IAdminUser } from './admin-users';
import { AdminUsersService } from './admin-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  
  userLists: IAdminUser[];
  errorMessage: string;
  pager: any = {};
  pagedItems: any[];
  filterAdminUser ='';

 constructor(private _userService: AdminUsersService, private pagerService: PagerService) { }

  

  ngOnInit(): void {
     // this.contacts = this._contactService.getContactsNative();
    this._userService.getUsersHttp().subscribe((users) => {this.userLists = users, this.setPage(1);
                                                                     (error) => this.errorMessage = error });
  }
  
  getContacts() {
    this._userService.getUsersHttp().subscribe((users) => {this.userLists = users, this.setPage(1);
                                                                     (error) => this.errorMessage = error });
  }
  
  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.userLists.length, page);

        // get current page of items
        this.pagedItems = this.userLists.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}
