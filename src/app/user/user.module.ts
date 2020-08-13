import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { SearchComponent } from './search/search.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';



@NgModule({
  declarations: [BookingHistoryComponent, SearchComponent, RoomDetailComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
