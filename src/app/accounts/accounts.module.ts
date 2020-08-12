import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageManagerComponent } from './image-manager/image-manager.component';
import { OrdersManagerComponent } from './orders-manager/orders-manager.component';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "../home/homepage/homepage.component";
import {AccountListComponent} from "../admin-page/account-manager/account-list/account-list.component";
import {ProductManagerComponent} from "./product-manager/product-manager.component";

const routes: Routes = [
  {path: 'products', component: ProductManagerComponent},
]

@NgModule({
  declarations: [ImageManagerComponent, OrdersManagerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AccountsModule { }
