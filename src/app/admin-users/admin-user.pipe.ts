import { Pipe, PipeTransform } from '@angular/core';
import {IAdminUser} from './admin-users';
@Pipe({
  name: 'adminUser'
})
export class AdminUserPipe implements PipeTransform {

 transform(value: IAdminUser[], filterBy: string): IAdminUser[] {
    filterBy = filterBy? filterBy.toLowerCase():null;
    return filterBy ? value.filter((user:IAdminUser)=> user.username.toLowerCase().indexOf(filterBy)!== -1):value;
  }

}





