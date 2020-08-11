import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {AdminPageModule} from "./admin-page/admin-page.module";
import {HttpClientModule} from "@angular/common/http";
import {DataTablesModule} from "angular-datatables";
import { AdminSideMenuComponent } from './core/admin-side-menu/admin-side-menu.component';
// import { ProductAddComponent } from './product-manager/product-add/product-add.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminSideMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    AdminPageModule,
    DataTablesModule,
  ],
  providers: [],
  exports: [
    AdminSideMenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
