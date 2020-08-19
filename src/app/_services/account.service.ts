import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, BehaviorSubject} from "rxjs";
import {Account} from "../_model/account";


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userSubject: BehaviorSubject<Account>;

  url = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Account[]>{
    // return this.httpClient.get<Product[]>(this.url);
    return null;
  }

  getById(id: number): Observable<Account>{
    return this.httpClient.get<Account>(this.url + '/profile/' + id);
  }

  delete(id: number): Observable<Account>{
    // return this.httpClient.delete<Product>(this.url + '/' + id + '/delete');
    return null;
  }


  add(account: Account): Observable<Account>{
    // return this.httpClient.post<Product>(this.url + '/create', account);
    return null;
  }

  edit(account: Account): Observable<Account>{
    return this.httpClient.put<Account>(this.url + '/profile/edit', account);
  }

  login(account: any): Observable<Account>{
    return this.httpClient.post<any>(this.url+'/login', account);
  }

  register(account: any): Observable<Account>{
    return this.httpClient.post<any>(this.url+'/signup', account);
  }

}
