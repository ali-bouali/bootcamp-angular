import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";
import {TokenService} from "../../services/token-service/token.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menu: Menu[] = [];

  constructor(
    private tokenService: TokenService
  ) {
    if (this.tokenService.isAdmin) {
      this.menu = [
        {
          icon: 'fas fa-home',
          label: 'Dashboard',
          url: 'admin',
        }, // Admin dashboard
        {
          icon: 'fas fa-users',
          label: 'Customers',
          url: 'admin/customers',
        }
      ];
    } else {
      this.menu = [
        {
          icon: 'fas fa-home',
          label: 'Dashboard',
          url: 'dashboard',
        },
        {
          icon: 'fa-solid fa-money-bill-trend-up',
          label: 'Transactions',
          url: 'transactions'
        },
        {
          icon: 'fas fa-users',
          label: 'Contacts',
          url: 'contacts'
        },
        {
          icon: 'fas fa-cogs',
          label: 'Settings',
          url: 'settings'
        },
      ];
    }
  }

}
