import { Component, OnInit } from '@angular/core';
import {ProductsService} from "@app/_services/products.service";
import {Product} from "@app/_model/product";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loadData()

  }

  productList: Product[] = [];

  loadData(){
    this.productsService.getAll().subscribe(data =>
      this.productList = data
    );
    console.log(this.productList);
  }


}
