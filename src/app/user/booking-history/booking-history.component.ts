import { Component, OnInit } from '@angular/core';
import {Account} from "@app/_model/account.ts";
import {BookingService} from "@app/_services/booking.service";
import {Booking} from "@app/_model/booking";
import {House} from "@app/_model/house";
import {HouseService} from "@app/_services/house.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../_services/account.service";
import {TokenStorageService} from "../../jwt/tokenStorage.service";

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  id: number;
  historyBooking: Booking[];
  bookingId: number;

  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.tokenStorageService.getUser())
    this.bookingService.getHistoryBooking(this.id).subscribe(data=>{ return this.historyBooking = data});
    console.log(this.historyBooking)
  }


}
