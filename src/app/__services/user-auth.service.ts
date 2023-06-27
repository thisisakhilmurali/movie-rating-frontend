import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  // Setting and getting user roles
  public setRole(roles: []) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRole(): [] {
    return JSON.parse(localStorage.getItem("roles") || null || '{}');
  }

 // Setting and getting JWT Token
  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken() {
    return localStorage.getItem("jwtToken");
  }

  // Setting and getting Name of user
  public setName(nameOfUser: string) {
    localStorage.setItem("nameOfUser", nameOfUser);
  }

  public getName() {
    return localStorage.getItem("nameOfUser");
  }

  // Setting and getting userName of user
  public setUserName(userName: string) {
    localStorage.setItem("userName", userName);
  }

  public getUserName() {
    return localStorage.getItem("userName");
  }

// Clearing the localstorage
  public clearAllTraces() {
    localStorage.clear();
  }

// Checks if the user is on session
  public isLoggedIn() {
    return this.getRole() && this.getToken();
  }
}
