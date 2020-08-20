import {Injectable} from "@angular/core";
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_NAME = 'auth-user-name';

@Injectable({providedIn: 'root'})
export class TokenStorageService {
  constructor() {}
  signOut() {
    window.sessionStorage.clear();
  }
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(id: string) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, id);
  }
  public getUser() {
    return sessionStorage.getItem(USER_KEY);
  }
  public userName(userName: string){
    window.localStorage.removeItem(USER_NAME);
    window.localStorage.setItem(USER_NAME, userName);
  }
  public getUserName() {
    return localStorage.getItem(USER_NAME);
  }
}
