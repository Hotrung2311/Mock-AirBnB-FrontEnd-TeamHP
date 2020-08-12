import { Component, OnInit } from '@angular/core';
import {IRole} from "../../../_model/irole";
import {IType} from "../../../_model/itype";
import {IAccount} from "../../../_model/iaccount";
import {AccountService} from "../../../_services/account.service";


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor(
    private accountService: AccountService
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
