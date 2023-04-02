import { Component } from '@angular/core';
import {Menu} from "./menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menu: Menu[] = [
    {
      icon: 'fas fa-home',
      label: 'Dashboard',
      url: 'dashboard'
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
  ]
}
