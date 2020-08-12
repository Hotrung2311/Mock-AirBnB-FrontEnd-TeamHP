import { ca } from 'date-fns/locale';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private jwtHelper: JwtHelperService, private http: HttpClient) {}

  public isAuth(): boolean {
    try {
      const token = this.getRawToken();
      return !this.jwtHelper.isTokenExpired(token);
    } catch {
      return false;
    }
    // Check whether the token is expired and return
    // true or false
  }

  public signIn(loginPayload) {
    return this.http.post(
      'http://localhost:8080/api/auth/signIn',
      loginPayload
    );
  }

  public signOut() {
    window.localStorage.removeItem('access_token');
  }

  public getExpiationDate() {
    return helper.getTokenExpirationDate(this.getRawToken());
  }

  public decodePayload() {
    try {
      return helper.decodeToken(this.getRawToken());
    } catch (err) {
      console.log(err)
    }
  }

  public getRawToken() {
    return this.getAccessToken().token;
  }

  public getRole() {
    return this.getAccessToken().authorities[0].authority;
  }

  public isCustomer(): boolean {
    try {
      const authority = this.getRole();
      return authority === 'ROLE_CUSTOMER';
    } catch {
      return false;
    }
  }

  public isHost(): boolean {
    try {
      const authority = this.getRole();
      return authority === 'ROLE_HOST';
    } catch {
      return false;
    }
  }

  public isLogin(): boolean {
    try {
      const authority = this.getRole();
      return authority === 'ROLE_HOST' || authority === 'ROLE_CUSTOMER';
    } catch {
      return false;
    }
  }

  public getAccessToken() {
    return JSON.parse(window.localStorage.getItem('access_token'));
  }
}
