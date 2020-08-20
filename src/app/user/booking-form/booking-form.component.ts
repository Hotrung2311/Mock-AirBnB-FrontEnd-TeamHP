import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../_services/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../jwt/tokenStorage.service";
import {BookingService} from "../../_services/booking.service";
import {formatDate} from "@angular/common";
import {Booking} from "../../_model/booking";

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  bookingForm: FormGroup;
  id: number;

  constructor(private bookingService: BookingService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.bookingForm = this.fb.group({
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      house: [this.id],
      account: [this.tokenStorageService.getUser()]
    });
  }


  booking() {
    if (this.bookingForm.valid) {
      let startTime = new Date(this.bookingForm.value.startTime).getTime();
      let endTime = new Date(this.bookingForm.value.stopTime).getTime();
      const booking: Booking = {
        house: {
          id: this.bookingForm.value.house
        },
        account:{
          id: this.tokenStorageService.getUser()
        },
        stopTime: endTime,
        startTime: startTime
      };

      console.log(booking)
      this.bookingService.add(booking).subscribe(
        data => {
          this.bookingForm.reset;
          this.router.navigate(['/home']);
        },
        err => {
          alert(err);
        }
      );
    }
  }

}
