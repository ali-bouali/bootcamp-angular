import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {MainComponent} from "./pages/main/main.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {TransactionsComponent} from "./pages/transactions/transactions.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {ManageContactsComponent} from "./pages/manage-contacts/manage-contacts.component";
import {NewTransactionComponent} from "./pages/new-transaction/new-transaction.component";
import {TokenGuardService} from "./services/guard/token-guard/token-guard.service";
import {AdminMainComponent} from "./admin/admin-main/admin-main.component";
import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {AccessDeniedComponent} from "./pages/access-denied/access-denied.component";
import {AdminGuardService} from "./services/guard/admin-guard/admin-guard.service";
import {CustomersComponent} from "./admin/customers/customers.component";
import {ActiveGuardService} from "./services/guard/active-guard/active-guard.service";
import {RegisterSuccessComponent} from "./pages/register-success/register-success.component";
import {InactiveAccountComponent} from "./pages/inactive-account/inactive-account.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  {
    path: 'register-success',
    component: RegisterSuccessComponent
  },
  {
    path: 'inactive-account',
    component: InactiveAccountComponent
  },
  {
    path: 'admin',
    component: AdminMainComponent,
    canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
        canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
      },
      {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
      }
    ]
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [ TokenGuardService, ActiveGuardService ],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ TokenGuardService, ActiveGuardService ],
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
        canActivate: [ TokenGuardService, ActiveGuardService ],
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        canActivate: [ TokenGuardService, ActiveGuardService ],
      },
      {
        path: 'contacts/manage',
        component: ManageContactsComponent,
        canActivate: [ TokenGuardService, ActiveGuardService ],
      },
      {
        path: 'contacts/manage/:contactId',
        component: ManageContactsComponent,
        canActivate: [ TokenGuardService, ActiveGuardService ],
      },
      {
        path: 'transactions/new',
        component: NewTransactionComponent,
        canActivate: [ TokenGuardService, ActiveGuardService ],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
