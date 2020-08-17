import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../_model/product";
import {House} from "../_model/house";

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  url = "http://localhost:8080/house";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<House[]>{
    return this.httpClient.get<House[]>(this.url);
  }

  getById(id: number): Observable<House>{
    return this.httpClient.get<House>(this.url + '/detail/' + id);
  }

  delete(id: number): Observable<House>{
    return this.httpClient.delete<House>(this.url + '/' + id + '/delete');
  }

  add(house: House): Observable<House>{
    return this.httpClient.post<House>(this.url + '/create', house);
  }

  edit(house: House): Observable<House>{
    return this.httpClient.put<House>(this.url + house.id + '/update', house);
  }
}
