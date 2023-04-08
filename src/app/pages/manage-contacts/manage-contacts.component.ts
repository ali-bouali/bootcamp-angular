import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactRequest} from '../../services/models/contact-request';
import {ContactsService} from "../../services/services/contacts.service";
import {TokenService} from "../../services/token-service/token.service";
import {ContactResponse} from "../../services/models/contact-response";

@Component({
  selector: 'app-manage-contacts',
  templateUrl: './manage-contacts.component.html',
  styleUrls: ['./manage-contacts.component.scss']
})
export class ManageContactsComponent implements OnInit{

  contactRequest: ContactRequest = {email: '', firstname: '', iban: '', lastname: '', userId: -1};
  errorMsgs: string[] = [];
  title = 'Create contact';
  private contactId: number | undefined;

  constructor(
    private router: Router,
    private contactsService: ContactsService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.contactId = this.activatedRoute.snapshot.params['contactId'] as number;
    if (this.contactId) {
      this.title = 'Update contact';
      this.contactsService.findById1({'contact-id': this.contactId})
        .subscribe({
          next: (data) => {
            this.contactRequest = this.transform(data);
          }
        });
    }
  }
  cancel() {
    this.router.navigate(['contacts']);
  }

  save() {
    this.contactRequest.userId = this.tokenService.getUserId;
    this.contactsService.save2({body: this.contactRequest})
      .subscribe({
        next: () => {
          this.router.navigate(['contacts']);
        },
        error: (err) => {
          this.errorMsgs = err.error.validationErrors;
        }
      });
  }

  private transform(contact: ContactResponse): ContactRequest {
    return <ContactRequest> {
      id: contact.id,
      userId: contact.id,
      firstname: contact.firstname,
      lastname: contact.lastname,
      email: contact.email,
      iban: contact.iban
    }
  }
}
