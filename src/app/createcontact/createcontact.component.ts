import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {
  
  userForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    
    this.userForm = this.fb.group({
      firstName: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.pattern('[a-zA-Z0-10.%+-]+@[a-z0-9.-]+.[a-z]{2,5}')]],
      tel: '',
      add: ''
       
    })
  }

}
