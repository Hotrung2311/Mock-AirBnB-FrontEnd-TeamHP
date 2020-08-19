import { Component, OnInit } from '@angular/core';
import {Account} from "@app/_model/account.ts";
import {BookingService} from "@app/_services/booking.service";
import {Booking} from "@app/_model/booking";
import {House} from "@app/_model/house";
import {HouseService} from "@app/_services/house.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  id: number;
  historyBooking: Booking[];

  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.bookingService.getHistoryBooking(this.id).subscribe(data=>{ return this.historyBooking = data});
    console.log(this.historyBooking)
  }

}
