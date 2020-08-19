import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '@app/_services/account.service';
import {Account} from "@app/_model/account.ts";

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
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.id = +this.route.snapshot.params['id'];
    this.id = 1;

    this.editForm = this.formBuilder.group({
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

  }

}
