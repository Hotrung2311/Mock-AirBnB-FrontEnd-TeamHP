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
import {AccountProfileComponent} from "@app/accounts/account-profile/account-profile.component";
import {ProductCreateComponent} from "@app/accounts/product-create/product-create.component";
import {ProductListComponent} from "@app/accounts/product-list/product-list.component";
import {ProductEditComponent} from "@app/accounts/product-edit/product-edit.component";
import {ProductDeleteComponent} from "@app/accounts/product-delete/product-delete.component";


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
      AccountProfileComponent,
      ProductCreateComponent,
      ProductListComponent,
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
