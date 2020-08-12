import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IType} from '../_model/itype';
import {environment} from "../../environments/environment";
import {IAccount} from "../_model/iaccount";
import {IImage} from "../_model/iimage";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  url = environment.API_URL_TYPE;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IType[]>{
    return this.httpClient.get<IType[]>(this.url);
  }

  getById(id: number): Observable<IType>{
    return this.httpClient.get<IType>(this.url + '/' + id);
  }

  delete(id: number): Observable<IType>{
    return this.httpClient.delete<IType>(this.url + '/' + id + '/delete');
  }

  add(iType: IType): Observable<IType>{
    return this.httpClient.post<IType>(this.url + '/create', iType);
  }

  edit(iType: IType): Observable<IType>{
    return this.httpClient.put<IType>(this.url + iType.id + '/update', iType);
  }

}








