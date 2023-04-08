import { Injectable } from '@angular/core';
import {AuthenticationResponse} from "../models/authentication-response";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  saveResponse(response: AuthenticationResponse): void {
    localStorage.setItem('token', response.token as string);
    localStorage.setItem('userId', response.userId as any as string);
    localStorage.setItem('username', response.username as any as string);
  }

  get getToken(): string {
    return localStorage.getItem('token') as string;
  }

  get getUserId(): number {
    return localStorage.getItem('userId') as any as number;
  }

  get getUsername(): string {
    return localStorage.getItem('username') as any as string;
  }

  get userRole(): string {
    const token = this.getToken;
    if (token) {
      const jwtHelper = new JwtHelperService();
      const decodedToken = jwtHelper.decodeToken(token);
      return decodedToken.role[0].name === 'ROLE_USER' ? 'CUSTOMER' : 'ADMIN';
    }
    return '--';
  }

  cleanup(): void {
    localStorage.clear();
  }

  get isTokenValid(): boolean {
    const token = this.getToken;
    if (token) {
      const jwtHelper = new JwtHelperService();
      const isTokenExpired = jwtHelper.isTokenExpired(token);
      if (isTokenExpired) {
        localStorage.clear();
        return false;
      }
      return true;
    }
    return false;
  }


}
