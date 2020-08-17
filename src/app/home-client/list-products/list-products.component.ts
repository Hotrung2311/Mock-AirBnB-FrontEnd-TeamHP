import { Component, OnInit } from '@angular/core';
import {ProductsService} from "@app/_services/products.service";
import {Product} from "@app/_model/product";
import {House} from "@app/_model/house";
import {HouseService} from "@app/_services/house.service";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

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
