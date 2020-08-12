import { Component } from '@angular/core';
import {AccountService} from "@app/_services/account.service";

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {

    constructor(private accountService: AccountService) {
        // this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        // this.accountService.logout();
    }
}
