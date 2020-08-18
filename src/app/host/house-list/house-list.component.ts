import {Component, OnInit} from '@angular/core';
import {House} from "@app/_model/house";
import {HouseService} from "@app/_services/house.service";
import {Res} from "@app/_model/res";
import {Host} from "@app/_model/host";

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  host: Host;
  houses: House[] = [];
  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.host = {
      id: 1
    }
    this.houseService.getHouseByHost().subscribe((data: Res) => {
      // console.log(data[0]);
      this.houses = data.data;
      console.log(this.houses);
    })
  }

}
