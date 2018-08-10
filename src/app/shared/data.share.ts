import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {IContact} from '../contact-list/contact';

@Injectable()
export class DataService {

    response: IContact = new IContact('','','','','','');
    private messageSource = new BehaviorSubject(this.response);
    currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: IContact) {
    this.messageSource.next(message)
  }
 
}