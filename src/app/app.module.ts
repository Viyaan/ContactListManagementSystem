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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvalidloginComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, HttpModule, RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'viewContacts', component: ContactListComponent},
      {path: 'invalidPassword', component: InvalidloginComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},

    ])
  ],
  providers: [ContactlistService],
  bootstrap: [AppComponent]
})
export class AppModule {}
