import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {AdminPageModule} from "./admin-page/admin-page.module";
import {HttpClientModule} from "@angular/common/http";
import {DataTablesModule} from "angular-datatables";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {AccountsModule} from "./accounts/accounts.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    AdminPageModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    AccountsModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
