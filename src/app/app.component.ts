import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User = {
      id: '1',
      email: 'bang',
      phone: '242526262',
      username: 'bang',
      password: '12345',
      firstName: 'bang',
      lastName: 'bang',
      token: 'ken'
    };

    constructor(private accountService: AccountService) {
        // this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        // this.accountService.logout();
    }
}
