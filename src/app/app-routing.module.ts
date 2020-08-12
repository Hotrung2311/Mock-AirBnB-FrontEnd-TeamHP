import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountLoginComponent} from '@app/accounts/account-login/account-login.component';
import {HomepageComponent} from '@app/home/homepage/homepage.component';
import {AccountRegisterComponent} from '@app/accounts/account-register/account-register.component';

const routes: Routes = [
  {path: 'login', component: AccountLoginComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'register', component: AccountRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
