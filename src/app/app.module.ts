import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactlistService} from './contact-list/contactlist.service';
import {EditcontactComponent} from './editcontact/editcontact.component';
import {UserformService} from './editcontact/services/userform.service';
import {CreatecontactComponent} from './createcontact/createcontact.component'
import {PagerService} from './contact-list/pager.service';
import {AuthService} from './login/auth.service';
import {AuthGuard} from './login/auth.guard';
import {TokenInterceptorService} from './login/token-interceptor.service';
import {ContactFilterPipe} from './contact-list/contact-filter.pipe';
import {AboutComponent} from './about/about.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminUserPipe } from './admin-users/admin-user.pipe';
import {AdminUsersService} from './admin-users/admin-users.service';
import {CreateAdminUsersService} from './create-admin-user/create-admin-users.service';

import { CreateAdminUserComponent } from './create-admin-user/create-admin-user.component';
import { EditAdminUsersComponent } from './edit-admin-users/edit-admin-users.component';
import {DataService} from './shared/data.share';
import {UserDataService} from './shared/user.datashare.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactListComponent,
    EditcontactComponent,
    CreatecontactComponent,
    ContactFilterPipe,
    AboutComponent,
    AdminUsersComponent,
    AdminUserPipe,
    CreateAdminUserComponent,
    EditAdminUsersComponent
    
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'about', component: AboutComponent},
      {path: 'viewContacts', component: ContactListComponent, canActivate: [AuthGuard]},
      {path: 'viewUsers', component: AdminUsersComponent , canActivate: [AuthGuard]},
      {path: 'edit', component: EditcontactComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'add', component: CreatecontactComponent, canActivate: [AuthGuard]},
      {path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'addUser', component: CreateAdminUserComponent, canActivate: [AuthGuard]},
      {path: 'editUser', component: EditAdminUsersComponent, canActivate: [AuthGuard]},

    ])
  ],
  providers: [ContactlistService, UserformService, PagerService, AuthService, AuthGuard, AdminUsersService,CreateAdminUsersService, DataService,UserDataService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
