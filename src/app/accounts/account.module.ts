import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import {LayoutComponent} from "./layout/layout.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        LayoutComponent,
        AccountLoginComponent,
        AccountRegisterComponent
    ]
})
export class AccountModule { }
