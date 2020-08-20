import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { SearchComponent } from './search/search.component';
import {RouterModule, Routes} from "@angular/router";
import {DetailProductComponent} from "../home-client/detail-product/detail-product.component";
import {SearchProductComponent} from "../home-client/search-product/search-product.component";
import { BookingFormComponent } from './booking-form/booking-form.component';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import { ProfileEditFormComponent } from './profile-edit-form/profile-edit-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeleteConfirmComponent } from './booking-history/delete-confirm/delete-confirm.component';

const routes: Routes = [
  {path: 'history', component: BookingHistoryComponent},
  {path: 'search', component: SearchProductComponent},
  {path: 'booking/:id' , component: BookingFormComponent},
  {path: 'delete-booking/:id' , component: DeleteConfirmComponent},
  {path: 'profile/edit' , component: ProfileEditFormComponent},
  {path: ':id', component: DetailProductComponent},
]

@NgModule({
  declarations: [BookingHistoryComponent, SearchComponent, BookingFormComponent, ProfileEditFormComponent, DeleteConfirmComponent],
  exports: [
    // BookingFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BsDatepickerModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
