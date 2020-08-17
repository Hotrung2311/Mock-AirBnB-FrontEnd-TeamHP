// import { Injectable } from '@angular/core';
// import {environment} from "../../environments/environment";
// import {HttpClient} from "@angular/common/http";
// import {Observable} from "rxjs";
// import {Account} from "../_model/account";
// import {Image} from "../_model/image";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ImageService {
//
//   url = environment.API_URL_ACCOUNT;
//
//   constructor(private httpClient: HttpClient) { }
//
//   getAllAccounts(): Observable<Image[]>{
//     return this.httpClient.get<Image[]>(this.url);
//   }
//
//   getImageById(id: number): Observable<Image>{
//     return this.httpClient.get<Image>(this.url + '/' + id);
//   }
//
//   deleteImage(id: number): Observable<Image>{
//     return this.httpClient.delete<Image>(this.url + '/' + id + '/delete');
//   }
//
//   addImage(image: Image): Observable<Image>{
//     return this.httpClient.post<Image>(this.url + '/create', image);
//   }
//
//   editImage(image: Image): Observable<Image>{
//     return this.httpClient.put<Image>(this.url + image.id + '/update', image);
//   }
//
// }
