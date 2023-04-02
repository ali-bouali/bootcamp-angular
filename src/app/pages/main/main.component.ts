import { Component } from '@angular/core';
import {FirstService} from "../../services/first-service/first.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(
    private service: FirstService
  ) {
    this.service.fetchAllContacts()
      .subscribe({
        next: (result) => {
          console.log(result);
        }
      })
    ;
  }
}
