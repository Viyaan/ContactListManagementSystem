import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { IAdminUser } from '../admin-users/admin-users';
import {CreateAdminUsersService} from '../create-admin-user/create-admin-users.service';
import {NgForm} from '@angular/forms';
import {UserDataService} from '../shared/user.datashare.service';

@Component({
    selector: 'app-edit-admin-users',
    templateUrl: './edit-admin-users.component.html',
    styleUrls: ['./edit-admin-users.component.css']
})
export class EditAdminUsersComponent implements OnInit {
    public adminUser: IAdminUser
    
    
    userRoles = ["USER","ADMIN"];
    roleSelected: any;

    constructor(private _route: ActivatedRoute, private _router: Router, private adminUsersService: CreateAdminUsersService, private data:UserDataService) { }

    ngOnInit() {

        this.data.currentMessage.subscribe(adminUser => this.adminUser = adminUser)
   
        
    }
    editAdminUser(form: NgForm) {
        this.adminUsersService.putAdminUser(this.adminUser).subscribe((data) => { console.log('Success', data), this._router.navigate(['/viewUsers']) }
            , (err) => console.log('Error', err));

    }

    onRoleSelected(event) {
        console.log(event); //option value will be sent as event
    }
}

