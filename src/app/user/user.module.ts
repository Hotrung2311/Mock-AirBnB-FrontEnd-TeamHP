import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { SearchComponent } from './search/search.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "../home-client/home-page/home-page.component";
import {ListProductsComponent} from "../home-client/list-products/list-products.component";
import {DetailProductComponent} from "../home-client/detail-product/detail-product.component";
import {SearchProductComponent} from "../home-client/search-product/search-product.component";
import {HomeClientModule} from "@app/home-client/home-client.module";

const routes: Routes = [
  {path: 'history/:id', component: BookingHistoryComponent},
  {path: 'search', component: SearchProductComponent},
  {path: ':id', component: DetailProductComponent},
]

@NgModule({
  declarations: [BookingHistoryComponent, SearchComponent, RoomDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
