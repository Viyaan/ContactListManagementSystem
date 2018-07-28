import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IContact} from '../contact-list/contact';
import {UserformService} from '../editcontact/services/userform.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {


  public contact: IContact

  constructor(private _route: ActivatedRoute, private _router: Router, private userService: UserformService) {}

  ngOnInit() {

    this._route
      .queryParams
      .subscribe((params) => {
        this.contact = new IContact(params['id'], params['contactName'], params['contactEmail'], params['contactTel'], params['address'], params['face']);

      })
  }


  editUser(form: NgForm) {
    this.userService.putUser(this.contact).subscribe((data) => {console.log('Success', data), this._router.navigate(['/viewContacts'])}
      , (err) => console.log('Error', err));

  }
}