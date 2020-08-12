import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../../_services/account.service";
import {Router, ActivatedRoute} from "@angular/router";
import {IAccount} from "../../../_model/iaccount";

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  accountForm: FormGroup;
  account: IAccount;

  constructor(private accountService: AccountService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id: number;
    this.route.paramMap.subscribe(params => {
      id = Number(params.get('id'));
    });

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

    this.accountService.getById(id).subscribe(
      data => {
        this.account = data;
        this.accountForm.patchValue(data);
      }
    );


  }


  onSubmit() {
    if (this.accountForm.valid) {
      console.log(this.accountForm);
      const acc = this.accountForm.value;
      this.accountService.edit(acc).subscribe(
        data => {
          this.accountForm.reset;
          this.router.navigate(['/admin']);
        },
        err => {
          alert(err);
        }
      );
      // this.router.navigate(['/admin']);
    }
  }

}
