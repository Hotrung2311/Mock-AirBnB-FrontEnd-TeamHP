import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from "../../../_services/account.service";
import {IAccount} from "../../../_model/iaccount";

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.css']
})
export class AccountDeleteComponent implements OnInit {

  id: number;
  _account: IAccount;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.accountService.getById(this.id).subscribe(data=>{this._account = data});
  }

  deleteAccount(){
    this.accountService.delete(this.id).subscribe();
    this.router.navigate(['/admin']);
  }

}
