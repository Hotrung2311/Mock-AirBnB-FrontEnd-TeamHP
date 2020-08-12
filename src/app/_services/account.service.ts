import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAccount} from "../_model/iaccount";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url = environment.API_URL_ACCOUNT;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IAccount[]>{
    return this.httpClient.get<IAccount[]>(this.url);
  }

  getById(id: number): Observable<IAccount>{
    return this.httpClient.get<IAccount>(this.url + '/' + id);
  }

  delete(id: number): Observable<IAccount>{
    return this.httpClient.delete<IAccount>(this.url + '/' + id + '/delete');
  }

  add(account: IAccount): Observable<IAccount>{
    return this.httpClient.post<IAccount>(this.url+'/create', account);
  }

  edit(account: IAccount): Observable<IAccount>{
    return this.httpClient.put<IAccount>(this.url + '/' + account.id + '/update', account);
  }

}
