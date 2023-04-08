import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ContactsService} from "../../services/services/contacts.service";
import {TokenService} from "../../services/token-service/token.service";
import {ContactResponse} from "../../services/models/contact-response";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{

  contacts: ContactResponse[] = [];

  constructor(
    private router: Router,
    private contactsService: ContactsService,
    private tokenService: TokenService
  ) {
  }
  ngOnInit(): void {
    this.fetchAllContacts();
  }

  newContact() {
    this.router.navigate(['contacts', 'manage']);
  }

  private fetchAllContacts(): void {
    this.contactsService.findAll3({'user-id': this.tokenService.getUserId})
      .subscribe({
        next: (data) => {
          this.contacts = data;
        }
      });
  }

}
