import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { AccountListComponent } from './account-manager/account-list/account-list.component';
import {RouterModule} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import {Ng2OrderModule} from "ng2-order-pipe";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {DataTablesModule} from "angular-datatables";
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductListComponent } from './product-manager/product-list/product-list.component';
import { ProductAddComponent } from './product-manager/product-add/product-add.component';
import { ProductDeleteComponent } from './product-manager/product-delete/product-delete.component';
import { ProductEditComponent } from './product-manager/product-edit/product-edit.component';
import { ProductDetailComponent } from './product-manager/product-detail/product-detail.component';



@NgModule({
  declarations: [AccountManagerComponent, AccountListComponent, ProductManagerComponent, ProductListComponent, ProductAddComponent, ProductDeleteComponent, ProductEditComponent, ProductDetailComponent],
    imports: [
        CommonModule,
        RouterModule,
        NgxPaginationModule,
        Ng2OrderModule,
        Ng2SearchPipeModule,
        DataTablesModule
    ]
})
export class AdminPageModule { }
