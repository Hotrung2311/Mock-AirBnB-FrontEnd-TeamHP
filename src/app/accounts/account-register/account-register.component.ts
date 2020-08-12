import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@app/jwt/auth.service';
import {TokenStorageService} from '@app/jwt/tokenStorage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {
  form: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMess = '';
  roles: string[] = [];
  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      idNumber: ['', [Validators.required, Validators.minLength(6)]],
      passport: ['', [Validators.required, Validators.minLength(6)]],
      phonenumber: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.minLength(6)]],
    });
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      // this.roles = this.tokenStorage.getUser();
    }
  }
  onSubmit() {
    this.authService.signup(this.form.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        console.log(data.token);
        this.tokenStorage.saveUser(data.username);
        console.log(data);
        this.router.navigate(['home'])
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        console.log(this.tokenStorage);
      },
      err => {
        this.errorMess =  err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
