import { Component, OnInit } from '@angular/core';
import {HouseService} from "@app/_services/house.service";
import {House} from "@app/_model/house";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private houseService: HouseService
  ) { }

  ngOnInit(): void {
    this.loadData()

  }

  houseList: House[] = [];

  loadData(){
    this.houseService.getAll().subscribe(data =>
      this.houseList = data
    );
  }


}
