import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import {RouterModule} from "@angular/router";
import {AccountRoutingModule} from "./account-routing.module";
import {LayoutComponent} from "./layout/layout.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [LayoutComponent, AccountLoginComponent, AccountRegisterComponent],
  // exports: [
  //   CommonModule,
  //   ReactiveFormsModule,
  //   AccountLoginComponent,
  //   AccountRegisterComponent
  // ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ]
})
export class AccountsModule { }
