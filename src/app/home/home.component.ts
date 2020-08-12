import { Component } from '@angular/core';
import {User} from '../jwt/User';
import {AuthService} from '../jwt/auth.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;

    constructor() {
    }
}
