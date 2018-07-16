import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import { InvalidloginComponent } from './login/invalidlogin/invalidlogin.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import {ContactlistService} from './contact-list/contactlist.service';
import { EditcontactComponent } from './editcontact/editcontact.component';
import {UserformService} from './editcontact/services/userform.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvalidloginComponent,
    ContactListComponent,
    EditcontactComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, HttpModule, RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'viewContacts', component: ContactListComponent},
      {path: 'invalidPassword', component: InvalidloginComponent},
      {path: 'edit', component: EditcontactComponent,pathMatch: 'full'},
      {path: '', redirectTo: 'login', pathMatch: 'full'},

    ])
  ],
  providers: [ContactlistService,UserformService],
  bootstrap: [AppComponent]
})
export class AppModule {}
