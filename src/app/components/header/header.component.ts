import { Component } from '@angular/core';
import {TokenService} from "../../services/token-service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  get userName(): string {
    return this.tokenService.getUsername;
  }

  get role() {
    return this.tokenService.userRole;
  }

  logout() {
    this.tokenService.cleanup();
    this.router.navigate(['login']);
  }
}
