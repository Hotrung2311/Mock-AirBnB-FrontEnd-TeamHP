import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../_services/products.service";
import {IProduct} from "../../../_model/iproduct";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) {
  }

  productList: IProduct[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.productsService.getAll().subscribe(data =>
      this.productList = data
    );
    console.log(this.productList);
  }

  // public data = [
  //   {name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com'},
  //   {name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com'},
  //   {name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com'},
  //   {name: 'therichpost', email: 'therichpost@gmail.com', website: 'therichpost.com'},
  // ];
  // title = 'angulardatatables';
  // dtOptions: DataTables.Settings = {};
  //
  // ngOnInit() {
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 5,
  //     processing: true
  //   };
  // }


}
