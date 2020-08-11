import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./home/homepage/homepage.component";
import {AccountListComponent} from "./admin-page/account-manager/account-list/account-list.component";
import {ProductListComponent} from "./admin-page/product-manager/product-list/product-list.component";

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'admin/account/list', component:AccountListComponent},
  {path:'admin/product/list', component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
