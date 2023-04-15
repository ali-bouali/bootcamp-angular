import { Injectable } from '@angular/core';
import {TokenService} from "../../token-service/token.service";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.tokenService.isTokenValid) {
      this.router.navigate(['login']);
      return false;
    }
    if (!this.tokenService.isAdmin) {
      this.router.navigate(['access-denied']);
      return false;
    }
    return true;
  }
}
