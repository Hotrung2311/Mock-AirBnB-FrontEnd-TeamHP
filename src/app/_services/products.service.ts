import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {IProduct} from "../_model/iproduct";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = environment.API_URL_PRODUCT;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.url);
  }

  getById(id: number): Observable<IProduct>{
    return this.httpClient.get<IProduct>(this.url + '/' + id);
  }

  delete(id: number): Observable<IProduct>{
    return this.httpClient.delete<IProduct>(this.url + '/' + id + '/delete');
  }

  add(product: IProduct): Observable<IProduct>{
    return this.httpClient.post<IProduct>(this.url + '/create', product);
  }

  edit(product: IProduct): Observable<IProduct>{
    return this.httpClient.put<IProduct>(this.url + product.id + '/update', product);
  }

}
