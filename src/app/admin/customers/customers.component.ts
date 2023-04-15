import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/services/admin.service";
import {UserResponse} from "../../services/models/user-response";
import {UsersService} from "../../services/services/users.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {


  customers: UserResponse[] = [];
  inActiveCustomersDisplayed = true;
  constructor(
    private adminService: AdminService,
    private userService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.fetchAllInactiveUsers();
  }

  fetchAllInactiveUsers() {
    this.adminService.findAllNonActiveUsers()
      .subscribe({
        next: (data) => {
          this.customers = data;
        }
      });
  }
  fetchAllActiveUsers() {
    this.adminService.findAllActiveUsers()
      .subscribe({
        next: (data) => {
          this.customers = data;
        }
      });
  }

  switchList() {
    if (this.inActiveCustomersDisplayed) {
      this.fetchAllActiveUsers();
    } else {
      this.fetchAllInactiveUsers();
    }
    this.inActiveCustomersDisplayed = !this.inActiveCustomersDisplayed;
  }

  updateUserState(active: boolean | undefined, id: number | undefined) {
    if (active) {
      this.userService.validate({'user-id': id as number})
        .subscribe({
          next: () => {
           this.fetchAllInactiveUsers();
          }
        });
    } else {
      this.userService.invalidate({'user-id': id as number})
        .subscribe({
          next: () => {
            this.fetchAllActiveUsers();
          }
        });
    }
  }
}
