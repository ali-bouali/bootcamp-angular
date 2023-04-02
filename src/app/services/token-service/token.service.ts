import { Injectable } from '@angular/core';
import {AuthenticationResponse} from "../models/authentication-response";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  saveResponse(response: AuthenticationResponse): void {
    localStorage.setItem('token', response.token as string);
    localStorage.setItem('userId', response.userId as any as string);
  }

  get getToken(): string {
    return localStorage.getItem('token') as string;
  }

  get getUserId(): number {
    return localStorage.getItem('userId') as any as number;
  }

}
