import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {RouterModule} from '@angular/router';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxDropzoneModule} from 'ngx-dropzone';
import { HouseCreateComponent } from './house-create/house-create.component';

@NgModule({
  declarations: [ProductCreateComponent, ProductDetailComponent, ProductDeleteComponent, ProductEditComponent, HouseCreateComponent],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
  ]
})
export class HostModule {
}
