import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from "../../_services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private acountService: AccountService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phoneNumber: [''],
      accountAddress: [''],
      email: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form);
      const account = this.form.value;
      this.acountService.register(account).subscribe(
        data => {
          this.form.reset;
          this.router.navigate(['/home']);
        },
        err => {
          alert(err);
        }
      );
    }
  }
}
