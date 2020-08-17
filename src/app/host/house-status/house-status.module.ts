import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseRentedComponent } from './house-rented/house-rented.component';
import { HouseNotRentedComponent } from './house-not-rented/house-not-rented.component';
import { HouseRentingComponent } from './house-renting/house-renting.component';



@NgModule({
  declarations: [HouseRentedComponent, HouseNotRentedComponent, HouseRentingComponent],
  imports: [
    CommonModule
  ]
})
export class HouseStatusModule { }
