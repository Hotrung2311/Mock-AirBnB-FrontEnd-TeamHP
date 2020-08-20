import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {RouterModule, Routes} from "@angular/router";
import {BookingHistoryComponent} from "../user/booking-history/booking-history.component";
import {SearchProductComponent} from "../home-client/search-product/search-product.component";
import {BookingFormComponent} from "../user/booking-form/booking-form.component";
import {ProfileEditFormComponent} from "../user/profile-edit-form/profile-edit-form.component";
import {DetailProductComponent} from "../home-client/detail-product/detail-product.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ProfileComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule,
        NgbDropdownModule,
        NgbModule
    ]
})
export class LoginModule { }
