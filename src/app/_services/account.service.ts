// import { Injectable } from '@angular/core';
// import {environment} from "../../environments/environment";
// import {HttpClient} from "@angular/common/http";
// import {Observable} from "rxjs";
// import {Account} from "../_model/account";
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
//   getAllAccounts(): Observable<Account[]>{
//     return this.httpClient.get<Account[]>(this.url);
//   }
//
//   getAccountById(id: number): Observable<Account>{
//     return this.httpClient.get<Account>(this.url + '/' + id);
//   }
//
//   deleteAccount(id: number): Observable<Account>{
//     return this.httpClient.delete<Account>(this.url + '/' + id + '/delete');
//   }
//
//   addAccount(account: Account): Observable<Account>{
//     return this.httpClient.post<Account>(this.url + '/create', account);
//   }
//
//   editAccount(account: Account): Observable<Account>{
//     return this.httpClient.put<Account>(this.url + account.id + '/update', account);
//   }
//
// }
