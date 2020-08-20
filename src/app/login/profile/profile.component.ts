import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Account} from "@app/_model/account";
import {AccountService} from "@app/_services/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "@app/jwt/tokenStorage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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

}
