import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './User';
import {Account} from './Account';
const AUTH_API = 'http://localhost:8080' ;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(account : Account): Observable<User>{
    return this.http.post<User>(
      `${AUTH_API}/login`, account
    );
  }
  show():Observable<User>{
    return this.http.get<User>(`${AUTH_API}/show`);
  }

}
