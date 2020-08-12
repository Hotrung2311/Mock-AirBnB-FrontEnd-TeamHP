import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { AccountListComponent } from './account-manager/account-list/account-list.component';
import {RouterModule, Routes} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import {Ng2OrderModule} from "ng2-order-pipe";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {DataTablesModule} from "angular-datatables";
import { ProductManagerComponent } from '../accounts/product-manager/product-manager.component';
import { ProductListComponent } from '../accounts/product-manager/product-list/product-list.component';
import { ProductAddComponent } from '../accounts/product-manager/product-add/product-add.component';
import { ProductDeleteComponent } from '../accounts/product-manager/product-delete/product-delete.component';
import { ProductEditComponent } from '../accounts/product-manager/product-edit/product-edit.component';
import { ProductDetailComponent } from '../accounts/product-manager/product-detail/product-detail.component';
import { TypeManagerComponent } from '../accounts/type-manager/type-manager.component';
import { TypeListComponent } from '../accounts/type-manager/type-list/type-list.component';
import { TypeDeleteComponent } from '../accounts/type-manager/type-delete/type-delete.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import {HomepageComponent} from "../home/homepage/homepage.component";
import { AccountDetailComponent } from './account-manager/account-detail/account-detail.component';

const routes: Routes = [
  {path: 'list', component: AccountListComponent},
  {path: 'list/1', component: AccountDetailComponent},
]

@NgModule({
  declarations: [AccountManagerComponent, AccountListComponent, ProductManagerComponent, ProductListComponent, ProductAddComponent, ProductDeleteComponent, ProductEditComponent, ProductDetailComponent, TypeManagerComponent, TypeListComponent, TypeDeleteComponent, AccountDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminPageModule { }
