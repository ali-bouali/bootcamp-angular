import {Component, Input} from '@angular/core';
import {Menu} from "../menu/menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  constructor(
    private router: Router
  ) {
  }

  @Input()
  menu: Menu = {};

  navigateTo() {
    if (this.menu.url) {
      this.router.navigate([this.menu.url]);
    }
  }
}
