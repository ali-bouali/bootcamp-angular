import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {

  constructor(
    private router: Router
  ) {
  }
  newTransaction() {
    this.router.navigate(['transactions', 'new']);
  }
}
