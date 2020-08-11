import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '@app/_services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  constructor(
    private router: Router,
    private accountService: AccountService
  ) {
    // redirect to home if already logged in
    if (this.accountService.userValue) {
      this.router.navigate(['/']);
    }
  }

    ngOnInit(): void {
  }
}
