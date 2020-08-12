import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./home/homepage/homepage.component";

const routes: Routes = [
  {path:'', loadChildren: './admin-page/admin-page.module#AdminPageModule'},
  {path:'', loadChildren: './accounts/accounts.module#AccountsModule'},
  {path:'', loadChildren: './home/home.module#HomeModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
