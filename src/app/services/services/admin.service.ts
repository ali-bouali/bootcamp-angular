/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root',
})
export class AdminService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAllNonActiveUsers
   */
  static readonly FindAllNonActiveUsersPath = '/api/v1/admin/users/inactive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllNonActiveUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllNonActiveUsers$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UserResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.FindAllNonActiveUsersPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllNonActiveUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllNonActiveUsers(params?: {
  },
  context?: HttpContext

): Observable<Array<UserResponse>> {

    return this.findAllNonActiveUsers$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UserResponse>>) => r.body as Array<UserResponse>)
    );
  }

  /**
   * Path part for operation findAllActiveUsers
   */
  static readonly FindAllActiveUsersPath = '/api/v1/admin/users/active';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllActiveUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllActiveUsers$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UserResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.FindAllActiveUsersPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserResponse>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllActiveUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllActiveUsers(params?: {
  },
  context?: HttpContext

): Observable<Array<UserResponse>> {

    return this.findAllActiveUsers$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UserResponse>>) => r.body as Array<UserResponse>)
    );
  }

}
