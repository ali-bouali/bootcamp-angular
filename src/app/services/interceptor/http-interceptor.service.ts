import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "../token-service/token.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken;
    if (token) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token
        })
      });
      return  next.handle(authReq);
    }

    return next.handle(req);
  }
}
