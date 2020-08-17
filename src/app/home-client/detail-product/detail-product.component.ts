import { Component, OnInit } from '@angular/core';
import {Product} from "@app/_model/product";
import {ActivatedRoute} from "@angular/router";
import { HouseService } from '@app/_services/house.service';
import {House} from "@app/_model/house";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  id: number;
  house: House;

  constructor(
    private houseService: HouseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.houseService.getById(this.id).subscribe(data=>{ return this.house = data});
    console.log(this.house)
  }
}
