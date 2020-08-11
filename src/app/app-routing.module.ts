import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./home/homepage/homepage.component";
import {LoginComponent} from "./accounts/login.component";

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'logins', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
