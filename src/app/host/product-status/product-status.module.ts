import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsNotRentedComponent } from './products-not-rented/products-not-rented.component';
import { ProductsRentedComponent } from './products-rented/products-rented.component';
import { ProductsRentingComponent } from './products-renting/products-renting.component';
import {Route, RouterModule} from "@angular/router";
import { LayoutComponent } from './layout/layout.component';

const routes: Route [
  ];
@NgModule({
  declarations: [
    ProductsNotRentedComponent,
    ProductsRentedComponent,
    ProductsRentingComponent,
    LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ProductStatusModule { }
