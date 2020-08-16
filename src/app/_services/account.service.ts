// import { Injectable } from '@angular/core';
// import {environment} from "../../environments/environment";
// import {HttpClient} from "@angular/common/http";
// import {Observable} from "rxjs";
// import {Account} from "../_model/iaccount";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AccountService {
//
//   url = environment.API_URL_ACCOUNT;
//
//   constructor(private httpClient: HttpClient) { }
//
//   getAll(): Observable<Account[]>{
//     return this.httpClient.get<Account[]>(this.url);
//   }
//
//   getById(id: number): Observable<Account>{
//     return this.httpClient.get<Account>(this.url + '/' + id);
//   }
//
//   delete(id: number): Observable<Account>{
//     return this.httpClient.delete<Account>(this.url + '/' + id + '/delete');
//   }
//
//   add(account: Account): Observable<Account>{
//     return this.httpClient.post<Account>(this.url + '/create', account);
//   }
//
//   edit(account: Account): Observable<Account>{
//     return this.httpClient.put<Account>(this.url + account.id + '/update', account);
//   }
//
// }
