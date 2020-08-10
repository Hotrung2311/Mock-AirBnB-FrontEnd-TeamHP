import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AccountLoginComponent} from "./account-login/account-login.component";
import {AccountRegisterComponent} from "./account-register/account-register.component";
import {LayoutComponent} from "./layout/layout.component";


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'login', component: AccountLoginComponent },
      { path: 'register', component: AccountRegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
