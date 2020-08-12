import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductEditComponent} from './product-edit/product-edit.component';

@NgModule({
  declarations: [ProductCreateComponent, ProductDetailComponent, ProductDeleteComponent, ProductEditComponent],
  imports: [
    CommonModule
  ]
})
export class HostModule {
}
