import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountLoginComponent} from '@app/accounts/account-login/account-login.component';

const routes: Routes = [
  {path: 'login', component: AccountLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
