import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ManageContactsComponent } from './pages/manage-contacts/manage-contacts.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {HttpInterceptorService} from "./services/interceptor/http-interceptor.service";
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { RegisterSuccessComponent } from './pages/register-success/register-success.component';
import { InactiveAccountComponent } from './pages/inactive-account/inactive-account.component';
import {ApiModule} from "./services/api.module";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    MenuComponent,
    MenuItemComponent,
    DashboardComponent,
    TransactionsComponent,
    ContactsComponent,
    ManageContactsComponent,
    NewTransactionComponent,
    LoaderComponent,
    HeaderComponent,
    AdminDashboardComponent,
    AdminMainComponent,
    AccessDeniedComponent,
    CustomersComponent,
    RegisterSuccessComponent,
    InactiveAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ApiModule.forRoot({
      rootUrl: environment.api_base_url
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
