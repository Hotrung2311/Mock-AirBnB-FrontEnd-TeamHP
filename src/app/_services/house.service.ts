import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../_model/account";
import {House} from "../_model/house";
import {ImageHouse} from "@app/_model/imageHouse";

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  url = 'http://localhost:8080/house';

  constructor(private httpClient: HttpClient) { }

  getAllHouses(){
    return this.httpClient.get(this.url);
  }

  getHouseById(id: number): Observable<House>{
    return this.httpClient.get<House>(this.url + '/' + id);
  }

  getHouseByHost() {
    return this.httpClient.get(this.url + '/getHouseByHost');
  }

  getDetailHouseById(id: number) {
    return this.httpClient.get(`http://localhost:8080/house/list/${id}`);
  }

  updateHouseImage(id: number, imageHouses: ImageHouse[]) {
    return this.httpClient.put(`http://localhost:8080/house/update-apartment-pictures/${id}`, imageHouses);
  }

  deleteHouse(id: number): Observable<House>{
    return this.httpClient.delete<House>(this.url + '/' + id + '/delete');
  }

  addHouse(house: House){
    return this.httpClient.post(this.url + '/create', house);
  }

  editHouse(house: House): Observable<Account>{
    return this.httpClient.put<Account>(this.url + house.id + '/update', house);
  }

}
