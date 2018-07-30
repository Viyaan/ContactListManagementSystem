import { Component, OnInit } from '@angular/core';
import { IAdminUser } from '../admin-users/admin-users';
import {FormGroup, FormControl, FormBuilder, Validators, NgForm, AbstractControl} from '@angular/forms';

import {CreateAdminUsersService} from './create-admin-users.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-create-admin-user',
  templateUrl: './create-admin-user.component.html',
  styleUrls: ['./create-admin-user.component.css']
})
export class CreateAdminUserComponent implements OnInit {
  
   userForm: FormGroup;
  user: IAdminUser;

  constructor(private fb: FormBuilder, private userAdminService:CreateAdminUsersService, private _router: Router) {}


 
  
   ngOnInit() {

    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
    

      password: ['', [Validators.required, Validators.minLength(3)]],
      roles: '',
      

    })
   
  }


 
  
   save(form: NgForm) { 
    this.user = new IAdminUser(this.userForm.value._id, this.userForm.value.username, this.userForm.value.password, this.userForm.value.roles);
    this.userAdminService.postAdminUser(this.user).subscribe((data) => {console.log('Success', data), this._router.navigate(['/viewUsers'])}
      , (err) => console.log('Error', err));

  }

}
