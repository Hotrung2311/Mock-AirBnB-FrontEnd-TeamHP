import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountsModule} from "./accounts/accounts.module";

const routes: Routes = [
  { path: 'account', loadChildren: AccountsModule},
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
