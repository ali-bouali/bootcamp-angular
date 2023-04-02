import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyContact} from "./my-contact";

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(
    private http: HttpClient
  ) { }

  fetchAllContacts(): Observable<MyContact> {
    let header: HttpHeaders = new HttpHeaders();
    header = header.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbmFiZWxsZV9LaW5nQGhvdG1haWwuY29tIiwiaWF0IjoxNjgwNDM3NzY0LCJleHAiOjE2ODA0MzkyMDR9.ru9HlXUurDmZuhmahE1dxnwzsydPIkBdyXbEL7rkE3Q');
    return this.http.get<MyContact>('http://localhost:8080/api/v1/contacts/user/1', {headers: header});
  }

}
