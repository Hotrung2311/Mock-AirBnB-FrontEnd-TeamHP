import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {authInterceptorProviders} from '@app/jwt/auth.intorceptor';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AccountLoginComponent} from '@app/accounts/account-login/account-login.component';
import {HomepageComponent} from '@app/home/homepage/homepage.component';
import {AccountRegisterComponent} from '@app/accounts/account-register/account-register.component';
import {ProductCreateComponent} from "@app/host/product-create/product-create.component";
import {ProductEditComponent} from "@app/host/product-edit/product-edit.component";
import {ProductDeleteComponent} from "@app/host/product-delete/product-delete.component";
import {ProductDetailComponent} from "@app/host/product-detail/product-detail.component";


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    HomepageComponent
  ],
  providers: [authInterceptorProviders,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
