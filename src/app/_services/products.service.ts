import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../_model/product";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "http://localhost:8080/products";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url);
  }

  getById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.url + '/' + id);
  }

  delete(id: number): Observable<Product>{
    return this.httpClient.delete<Product>(this.url + '/' + id + '/delete');
  }

  add(account: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.url + '/create', account);
  }

  edit(product: Product): Observable<Product>{
    return this.httpClient.put<Product>(this.url + product.id + '/update', product);
  }
}
