import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../_model/account";
import {House} from "../_model/house";

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  url = environment.API_URL_ACCOUNT;

  constructor(private httpClient: HttpClient) { }

  getAllHouses(): Observable<House[]>{
    return this.httpClient.get<House[]>(this.url);
  }

  getHouseById(id: number): Observable<House>{
    return this.httpClient.get<House>(this.url + '/' + id);
  }

  deleteHouse(id: number): Observable<House>{
    return this.httpClient.delete<House>(this.url + '/' + id + '/delete');
  }

  addHouse(house: House): Observable<House>{
    return this.httpClient.post<House>(this.url + '/create', house);
  }

  editHouse(house: House): Observable<Account>{
    return this.httpClient.put<Account>(this.url + house.id + '/update', house);
  }

}
