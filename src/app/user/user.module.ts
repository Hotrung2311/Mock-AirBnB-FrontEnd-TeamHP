import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { SearchComponent } from './search/search.component';
import {RouterModule, Routes} from "@angular/router";
import {DetailProductComponent} from "../home-client/detail-product/detail-product.component";
import {SearchProductComponent} from "../home-client/search-product/search-product.component";
import { BookingFormComponent } from './booking-form/booking-form.component';

const routes: Routes = [
  {path: 'history/:id', component: BookingHistoryComponent},
  {path: 'search', component: SearchProductComponent},
  {path: ':id', component: DetailProductComponent},
  {path: 'book' , component: BookingFormComponent},
]

@NgModule({
  declarations: [BookingHistoryComponent, SearchComponent, BookingFormComponent],
  exports: [
    BookingFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
