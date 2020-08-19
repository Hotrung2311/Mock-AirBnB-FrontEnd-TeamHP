import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {AccountService} from "../../_services/account.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private acountService: AccountService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm);
      const account = this.loginForm.value;
      this.acountService.login(account).subscribe(
        data => {
          this.loginForm.reset;
          this.router.navigate(['/home']);
        },
        err => {
          alert(err);
        }
      );
    }
  }

}
