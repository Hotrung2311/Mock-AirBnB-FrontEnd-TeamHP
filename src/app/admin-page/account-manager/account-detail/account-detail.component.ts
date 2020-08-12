import { Component, OnInit } from '@angular/core';
import {IAccount} from "../../../_model/iaccount";

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  public data: IAccount[] = [
    {
      id: 1,
      username: 'Hồ Đức Trung',
      password: '123',
      email: 'trung@gmail.com',
      phone: '0913231197',
      age: 1997,
      address: 'Hà Nội',
      idnumber: '2311',
      passport: 'B123',
      role:[
        {id:1, name:'Khách hàng'},
        {id:2, name:'Chủ nhà'},
      ]
    },
    {
      id: 2,
      username: 'Lê Mạnh Tuấn',
      password: '123',
      email: 'trung@gmail.com',
      phone: '0913231197',
      age: 1997,
      address: 'Hà Nội',
      idnumber: '2311',
      passport: 'B123',
      role:[
        {id:1, name:'Khách hàng'},
        // {id:2, name:'Chủ nhà'},
      ]
    },
    {
      id: 3,
      username: 'Mạc Văn BẰng',
      password: '123',
      email: 'trung@gmail.com',
      phone: '0913231197',
      age: 1997,
      address: 'Hà Nội',
      idnumber: '2311',
      passport: 'B123',
      role:[
        {id:1, name:'Khách hàng'},
        // {id:2, name:'Chủ nhà'},
      ]
    },
  ];

  accountList: IAccount[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.accountList = this.data;
  }

}
