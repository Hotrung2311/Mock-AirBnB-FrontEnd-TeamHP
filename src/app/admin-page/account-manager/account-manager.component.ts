import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../_services/account.service";
import {IType} from "../../_model/itype";
import {IAccount} from "../../_model/iaccount";

@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.css']
})
export class AccountManagerComponent implements OnInit {

  constructor(
     public accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  accountList: IAccount[] = [];

  loadData() {
    this.accountService.getAll().subscribe(data =>
      this.accountList = data
    );
    console.log(this.accountList);
  }

}
