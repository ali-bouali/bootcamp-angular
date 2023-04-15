import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {AuthenticationService} from "../../services/services/authentication.service";
import {TokenService} from "../../services/token-service/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {};
  errorMsg = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {}

  register() {
    this.router.navigate(['register']);
  }

  login() {
    this.errorMsg = '';
    this.authService.login(
      {
        body: this.authRequest
      }
    ).subscribe({
      next: (response) => {
        this.tokenService.saveResponse(response);
        if (this.tokenService.isAdmin) {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['dashboard']);
        }
      },
      error: (err) => {
        console.log(err);
        this.errorMsg = err.error.errorMsg;
      }
    });
  }
}
