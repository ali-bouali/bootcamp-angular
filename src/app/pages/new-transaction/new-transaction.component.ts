import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../services/token-service/token.service";
import {Router} from "@angular/router";
import {ContactsService} from "../../services/services/contacts.service";
import {TransactionsService} from "../../services/services/transactions.service";
import {ContactResponse} from "../../services/models/contact-response";
import {TransactionRequest} from "../../services/models/transaction-request";

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.scss']
})
export class NewTransactionComponent implements OnInit {
  contacts: Array<ContactResponse> = [];
  transactionType: 'Transaction type' | 'DEPOSIT' | 'TRANSFERT' = 'Transaction type';
  selectedContactInfo = 'Select a contact';
  transactionRequest: TransactionRequest = {amount: 0, destinationIban: '', type: 'DEPOSIT', userId: -1}
  errorMsgs: Array<string> = [];

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private contactsService: ContactsService,
    private transactionsService: TransactionsService
  ) {}
  ngOnInit(): void {
    this.fetchAllContacts();
  }


  private fetchAllContacts(): void {
    this.contactsService.findAll3({'user-id': this.tokenService.getUserId})
      .subscribe({
        next: (data) => {
          this.contacts = data;
        }
      });
  }

  selectContact(ct: ContactResponse) {
    if (ct.iban != null) {
      this.selectedContactInfo = ct.firstname + ' ' + ct.lastname + ' - ' + ct.iban;
      this.transactionRequest.destinationIban = ct.iban;
    }
  }

  save() {
    this.errorMsgs = []
    // @ts-ignore
    this.transactionRequest.type = this.transactionType;
    this.transactionRequest.userId = this.tokenService.getUserId;
    this.transactionsService.save1({body: this.transactionRequest})
      .subscribe({
        next: () => {
          this.router.navigate(['transactions']);
        },
        error: (err) => {
          this.errorMsgs = err.error.validationErrors;
        }
      });
  }
}
