import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRole(roles: []) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRole(): [] {
    return JSON.parse(localStorage.getItem("roles") || null || '{}');
  }


  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken() {
    return localStorage.getItem("jwtToken");
  }

  public clearAllTraces() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRole() && this.getToken();
  }
}
