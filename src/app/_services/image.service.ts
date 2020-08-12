import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IImage} from "../_model/iimage";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url = environment.API_URL_IMAGE;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IImage[]>{
    return this.httpClient.get<IImage[]>(this.url);
  }

  getById(id: number): Observable<IImage>{
    return this.httpClient.get<IImage>(this.url + '/' + id);
  }

  delete(id: number): Observable<IImage>{
    return this.httpClient.delete<IImage>(this.url + '/' + id + '/delete');
  }

  add(image: IImage): Observable<IImage>{
    return this.httpClient.post<IImage>(this.url + '/create', image);
  }

  edit(image: IImage): Observable<IImage>{
    return this.httpClient.put<IImage>(this.url + image.id + '/update', image);
  }

}
