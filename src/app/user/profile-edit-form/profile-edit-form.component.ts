import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '@app/_services/account.service';
import {Account} from "@app/_model/account.ts";
import {TokenStorageService} from "../../jwt/tokenStorage.service";

@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.css']
})
export class ProfileEditFormComponent implements OnInit {

  editForm: FormGroup;
  id: number;
  account: Account;
  abc: string;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.id = +this.tokenStorage.getUser();

    this.editForm = this.formBuilder.group({
      id: [''],
      username : [''],
      password : [''],
      phoneNumber : [''],
      accountAddress : [''],
      email : [''],
    });

    this.accountService.getById(this.id).subscribe(
      data => {
        this.account = data;
        this.editForm.patchValue(data);
      }
    );
  }

  edit(){
    this.accountService.edit(this.editForm.value).subscribe(
      data => {this.router.navigate(["/home"])}
    )
  }


  // loginForm: FormGroup;
  //
  // constructor(private acountService: AccountService,
  //             private fb: FormBuilder,
  //             private router: Router,
  //             private tokenStorage: TokenStorageService
  // ) {
  // }
  //
  // ngOnInit(): void {
  //   this.loginForm = this.fb.group({
  //     username: ['', [Validators.required]],
  //     password: ['', [Validators.required]],
  //   });
  // }
  //
  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm);
  //     const account = this.loginForm.value;
  //     this.acountService.login(account).subscribe(
  //       data => {
  //         this.tokenStorage.saveToken(data.token);
  //         this.tokenStorage.saveUser(String(data.id))
  //         this.loginForm.reset;
  //         this.router.navigate(['/home']);
  //       },
  //       err => {
  //         alert(err);
  //       }
  //     );
  //   }
  // }

}
