import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-contacts',
  templateUrl: './manage-contacts.component.html',
  styleUrls: ['./manage-contacts.component.scss']
})
export class ManageContactsComponent {

  constructor(
    private router: Router
  ) {
  }
  cancel() {
    this.router.navigate(['contacts']);
  }
}
