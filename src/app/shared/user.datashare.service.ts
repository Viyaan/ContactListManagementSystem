import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAdminUser } from '../admin-users/admin-users';

@Injectable()
export class UserDataService {

    response: IAdminUser = new IAdminUser('','','','');
    private messageSource = new BehaviorSubject(this.response);
    currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: IAdminUser) {
    this.messageSource.next(message)
  }
 
}