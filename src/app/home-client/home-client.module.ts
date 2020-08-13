import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { SearchProductComponent } from './search-product/search-product.component';



@NgModule({
  declarations: [ListProductsComponent, DetailProductComponent, SearchProductComponent],
  imports: [
    CommonModule
  ]
})
export class HomeClientModule { }
