import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsNotRentedComponent } from './products-not-rented/products-not-rented.component';
import { ProductsRentedComponent } from './products-rented/products-rented.component';
import { ProductsRentingComponent } from './products-renting/products-renting.component';


@NgModule({
  declarations: [ProductsNotRentedComponent, ProductsRentedComponent, ProductsRentingComponent],
  imports: [
    CommonModule
  ]
})
export class ProductStatusModule { }
