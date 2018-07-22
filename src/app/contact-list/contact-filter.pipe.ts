import { Pipe, PipeTransform } from '@angular/core';
import {IContact} from './contact';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {

   transform(value: IContact[], filterBy: string): IContact[] {
    filterBy = filterBy? filterBy.toLowerCase():null;
    return filterBy ? value.filter((contact:IContact)=> contact.name.toLowerCase().indexOf(filterBy)!== -1):value;
  }

}
