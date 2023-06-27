import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:9090";
  
  requestHeader = new HttpHeaders({
    "No-Auth": "True"
  });

  constructor(
    private httpClient: HttpClient,
    private userAuthService: UserAuthService
    ) { }

  // user login
  public login(loginData: any) {
    return this.httpClient.post(
      this.PATH_OF_API + "/api/auth/authenticate",
      loginData, 
      {
        headers: this.requestHeader
      }
      );
  }

  // user register
  public register(signUpData: any) {
    return this.httpClient.post(
      this.PATH_OF_API + "/api/auth/registerNewUser",
      signUpData, 
      {
        headers: this.requestHeader
      }
      );
  }

  // role match check
  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRole();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }


}
