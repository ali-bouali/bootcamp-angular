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
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: 'contacts/manage',
        component: ManageContactsComponent
      },
      {
        path: 'contacts/manage/:contactId',
        component: ManageContactsComponent
      },
      {
        path: 'transactions/new',
        component: NewTransactionComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
