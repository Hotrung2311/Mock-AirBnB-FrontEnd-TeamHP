import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { AccountChangePasswordComponent } from './account-change-password/account-change-password.component';



@NgModule({
  declarations: [AccountRegisterComponent, AccountLoginComponent, AccountProfileComponent, AccountChangePasswordComponent],
  imports: [
    CommonModule
  ]
})
export class AccountsModule { }
