import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TransactionsService} from "../../services/services/transactions.service";
import {TokenService} from "../../services/token-service/token.service";
import {TransactionResponse} from "../../services/models/transaction-response";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: Array<TransactionResponse> = [];

  constructor(
    private router: Router,
    private transactionsService: TransactionsService,
    private tokenService: TokenService
  ) {
  }

  ngOnInit(): void {
    this.fetchAllTransactions();
  }
  newTransaction() {
    this.router.navigate(['transactions', 'new']);
  }

  private fetchAllTransactions(): void {
    this.transactionsService.findAll1({'user-id': this.tokenService.getUserId})
      .subscribe({
        next: (data) => {
          this.transactions = data;
        }
      })
  }
}
