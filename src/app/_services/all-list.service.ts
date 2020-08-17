import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllListService {
  categoryUrl = 'http://localhost:8080/api/category';
  roomTypeUrl = 'http://localhost:8080/api/room-type';
  provinceUrl = 'http://localhost:8080/api/province';

  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<any> {
    return this.http.get(this.categoryUrl);
  }

  getRoomTypeList(): Observable<any>{
    return this.http.get(this.roomTypeUrl);
  }

  getProvinceList(): Observable<any>{
    return this.http.get(this.provinceUrl);
  }

}
