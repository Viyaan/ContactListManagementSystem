import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, NgForm, AbstractControl} from '@angular/forms';
import {IContact} from '../contact-list/contact';
import {UserformService} from '../editcontact/services/userform.service';


function emailMatcher(c: AbstractControl) {
  let emailControl = c.get('email');
  let confirmControl = c.get('confirmEmail');
  console.log(c.get('email'));
  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }
  if (emailControl.value == confirmControl.value) {
    return null;
  }
  return {'match': true};
}


@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {

  userForm: FormGroup;
  contact: IContact;
  emailMessage: string;

  constructor(private fb: FormBuilder, private userService: UserformService) {}

  private validationMessage = {
    required: 'Please enter your email address',
    pattern: 'Please enter a valid email'
  }


  ngOnInit() {

    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        confirmEmail: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      }, {Validators: emailMatcher}),

      tel: '',
      add: ''
    })
    const emailControl = this.userForm.get('emailGroup.email');
    emailControl.valueChanges.subscribe(value => this.setMessage(emailControl));
  }


  setMessage(c: AbstractControl): void {
    this.emailMessage = "";
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key =>
        this.validationMessage[key]).join(' ');
    }
  }

  save(form: NgForm) {
    console.log('Saved: ' + JSON.stringify(this.userForm.value));
    this.contact = new IContact('', this.userForm.value.firstName, this.userForm.value.emailGroup.email, this.userForm.value.tel, this.userForm.value.add, '');
    this.userService.postUser(this.contact).subscribe((data) => console.log('Success', data)
      , (err) => console.log('Error', err));

  }
}
