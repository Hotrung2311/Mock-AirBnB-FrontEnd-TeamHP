import { Component, OnInit } from '@angular/core';
import {IAccount} from "../../../_model/iaccount";
import {AccountService} from "../../../_services/account.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  id: number;
  account: IAccount;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.accountService.getById(this.id).subscribe(data=>{ return this.account = data});
    console.log(this.account)
  }
}
