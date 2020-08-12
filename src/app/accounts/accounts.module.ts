import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageManagerComponent } from './image-manager/image-manager.component';
import { OrdersManagerComponent } from './orders-manager/orders-manager.component';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "../home/homepage/homepage.component";
import {AccountListComponent} from "../admin-page/account-manager/account-list/account-list.component";
import {ProductManagerComponent} from "./product-manager/product-manager.component";
// import {LayoutComponent} from "@app/accounts/layout/layout.component";
// import {AccountLoginComponent} from "@app/accounts/account-login/account-login.component";
// import {AccountRegisterComponent} from "@app/accounts/account-register/account-register.component";
import {ReactiveFormsModule} from "@angular/forms";
// import {AccountRoutingModule} from "@app/accounts/account-routing.module";
import {AccountRegisterComponent} from "./account-register/account-register.component";
import {AccountLoginComponent} from "./account-login/account-login.component";

const routes: Routes = [
  {path: 'products', component: ProductManagerComponent},
]

@NgModule({
  declarations: [
    ImageManagerComponent,
    OrdersManagerComponent,
    LayoutComponent,
    AccountLoginComponent,
    AccountRegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    RouterModule.forChild(routes),
  ]
})
export class AccountsModule { }
