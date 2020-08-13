import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { AccountChangePasswordComponent } from './account-change-password/account-change-password.component';
import {Routes} from "@angular/router";
import {AccountListComponent} from "../admin-page/account-manager/account-list/account-list.component";
import {AccountCreateComponent} from "../admin-page/account-manager/account-create/account-create.component";
import {AccountDetailComponent} from "../admin-page/account-manager/account-detail/account-detail.component";
import {AccountDeleteComponent} from "../admin-page/account-manager/account-delete/account-delete.component";
import {AccountEditComponent} from "../admin-page/account-manager/account-edit/account-edit.component";

const routes: Routes = [
  {path: 'login', component: AccountLoginComponent},
  {path: 'profile', component: AccountProfileComponent},
  {path: 'register', component: AccountRegisterComponent},
]

@NgModule({
  declarations: [AccountRegisterComponent, AccountLoginComponent, AccountProfileComponent, AccountChangePasswordComponent],
  imports: [
    CommonModule
  ]
})
export class AccountsModule { }
