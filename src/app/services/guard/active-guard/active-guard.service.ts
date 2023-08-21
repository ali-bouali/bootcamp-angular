import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {TokenService} from "../../token-service/token.service";

@Injectable({
  providedIn: 'root'
})
export class ActiveGuardService implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.tokenService.isActive) {
      this.router.navigate(['inactive-account']);
      this.tokenService.cleanup();
      return false;
    }
    return true;
  }
}
