import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';

@NgModule({
  declarations: [AccountLoginComponent, AccountRegisterComponent],
  imports: [
    CommonModule,
  ]
})
export class AccountsModule { }
