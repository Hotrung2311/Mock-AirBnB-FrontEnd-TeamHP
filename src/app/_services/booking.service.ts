import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {House} from "../_model/house";
import {Booking} from "../_model/booking";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url = "http://localhost:8080/booking";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Booking[]>{
    return this.httpClient.get<Booking[]>(this.url);
  }

  getById(id: number): Observable<Booking>{
    return this.httpClient.get<Booking>(this.url + '/detail/' + id);
  }

  delete(id: number): Observable<Booking>{
    return this.httpClient.delete<Booking>(this.url + '/delete/' + id);
  }

  add(booking: Booking): Observable<Booking>{
    return this.httpClient.post<Booking>(this.url + '/create', booking);
  }

  edit(booking: House): Observable<Booking>{
    return this.httpClient.put<Booking>(this.url + booking.id + '/update', booking);
  }
  //--------------------------------------------------------------------------------------------------------
  getHistoryBooking(account_id: number){
    return this.httpClient.get<Booking[]>(this.url + "/" + account_id);
  }
}
