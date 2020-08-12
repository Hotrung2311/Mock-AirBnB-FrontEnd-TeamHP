import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccountModule} from "@app/accounts/account.module";
import {authInterceptorProviders} from '@app/jwt/auth.intorceptor';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AccountLoginComponent} from '@app/accounts/account-login/account-login.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        AccountModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
      AccountLoginComponent
    ],
  providers: [authInterceptorProviders,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
