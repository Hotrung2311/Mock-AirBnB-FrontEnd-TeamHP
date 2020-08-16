import { Component, OnInit } from '@angular/core';
import {ProductsService} from "@app/_services/products.service";
import {Product} from "@app/_model/product";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // this.loadData()

  }

  productList: Product[] = [];

  loadData(){
    this.productsService.getAll().subscribe(data =>
      this.productList = data
    );
    console.log(this.productList);
  }


}
