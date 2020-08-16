import { Component, OnInit } from '@angular/core';
import {ProductsService} from "@app/_services/products.service";
import {Product} from "@app/_model/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  id: number;
  product: Product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.productsService.getById(this.id).subscribe(data=>{ return this.product = data});
    console.log(this.product)
  }

}
