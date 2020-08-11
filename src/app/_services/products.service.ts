import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../_model/iproduct";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL = "http://localhost:8080/products";

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  addBook(book: any): Observable<any> {
    return this.http.post(this.API_URL, book);
  }

  editBook(id: number, book: Partial<IProduct>): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_URL}/${id}`, book);
  }
}
