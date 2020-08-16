import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import {DataTablesModule} from 'angular-datatables';

import {Routes, RouterModule} from "@angular/router";
import {NgbCarouselModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomePageComponent } from './home-page/home-page.component';
import { HistoryOrderComponent } from './history-order/history-order.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'list', component: ListProductsComponent},
  {path: 'detail', component: DetailProductComponent},
  {path: 'search', component: SearchProductComponent},
  {path: ':id', component: DetailProductComponent},
]


@NgModule({
  declarations: [ListProductsComponent, DetailProductComponent, SearchProductComponent, HomePageComponent, HistoryOrderComponent],
  exports:[
    DetailProductComponent,
  ],
    imports: [
        CommonModule,
        DataTablesModule,
        RouterModule.forChild(routes),
        NgbCarouselModule,
        NgbModule
    ]
})
export class HomeClientModule { }
