import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RegisterRequest} from "../../services/models/register-request";
import {AuthenticationService} from "../../services/services/authentication.service";
import {TokenService} from "../../services/token-service/token.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerRequest: RegisterRequest = {email: '', firstname: '', lastname: '', password: ''};
  errorMsgs: string[] = [];
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {}

  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.errorMsgs = [];
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.saveResponse(res);
        this.router.navigate(['register-success'])
      },
      error: (err) => {
        this.errorMsgs = err.error.validationErrors;
      }
    });
  }
}
