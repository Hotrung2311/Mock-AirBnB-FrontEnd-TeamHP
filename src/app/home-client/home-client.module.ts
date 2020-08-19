import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import {DataTablesModule} from 'angular-datatables';

import {Routes, RouterModule} from "@angular/router";
import {NgbCarouselModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularEditorModule} from '@kolkov/angular-editor';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'list', component: ListProductsComponent},
  {path: 'search', component: SearchProductComponent},
  {path: 'detail/:id', component: DetailProductComponent},
]


@NgModule({
  declarations: [ListProductsComponent, DetailProductComponent, SearchProductComponent, HomePageComponent],
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    RouterModule.forChild(routes),
    NgbCarouselModule,
    NgbModule,
    FormsModule,
    AngularEditorModule,
    ReactiveFormsModule
  ]
})
export class HomeClientModule { }
