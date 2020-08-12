import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../_services/account.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {IRole} from "../../../_model/irole";

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  accountForm: FormGroup;

  constructor(private accountService: AccountService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      id: ['20'],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
      passport: ['', [Validators.required]],
      roles: [{id:3, name:'admin'}]
    });
  }

  onSubmit() {
    if (this.accountForm.valid) {
      const account = this.accountForm.value;
      this.accountService.add(account).subscribe(
        data => {
          this.accountForm.reset;
          this.router.navigate(['/admin']);
        },
        err => {
          alert(err);
        }
      );
    }
  }
}
