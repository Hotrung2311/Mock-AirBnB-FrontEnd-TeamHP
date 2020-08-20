import { Component, OnInit } from '@angular/core';
import {Booking} from "@app/_model/booking";
import {BookingService} from "@app/_services/booking.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "@app/jwt/tokenStorage.service";

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  historyBooking: Booking[];
  bookingId: number;

  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deleteBooking(){
    this.bookingId = +this.route.snapshot.params['id'];
    this.bookingService.delete(this.bookingId).subscribe(data =>{this.router.navigate(['/user/history']);
    })
  }

}
