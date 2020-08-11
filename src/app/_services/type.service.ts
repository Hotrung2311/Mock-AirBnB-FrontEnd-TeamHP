import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IType} from "../_model/itype";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  API_URL = "http://localhost:8080/types";

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IType[]> {
    return this.http.get<IType[]>(this.API_URL);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  addNew(book: any): Observable<any> {
    return this.http.post(this.API_URL, book);
  }

  edit(id: number, book: Partial<IType>): Observable<IType> {
    return this.http.put<IType>(`${this.API_URL}/${id}`, book);
  }
}
