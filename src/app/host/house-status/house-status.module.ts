import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseRentedComponent } from './house-rented/house-rented.component';
import { HouseNotRentedComponent } from './house-not-rented/house-not-rented.component';
import { HouseRentingComponent } from './house-renting/house-renting.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
      {
        path: '',
        component: HouseNotRentedComponent,
      },
      {
        path: 'renting',
        component: HouseRentingComponent,
      },
      {
        path: 'rented',
        component: HouseRentedComponent,
      },
];

@NgModule({
  declarations: [
    HouseRentedComponent,
    HouseNotRentedComponent,
    HouseRentingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HouseStatusModule { }
