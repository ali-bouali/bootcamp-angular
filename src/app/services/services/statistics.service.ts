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

import { StatisticsResponse } from '../models/statistics-response';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserStats
   */
  static readonly GetUserStatsPath = '/api/v1/statistics/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserStats()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserStats$Response(params: {
    'user-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StatisticsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, StatisticsService.GetUserStatsPath, 'get');
    if (params) {
      rb.path('user-id', params['user-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StatisticsResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserStats$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserStats(params: {
    'user-id': number;
  },
  context?: HttpContext

): Observable<StatisticsResponse> {

    return this.getUserStats$Response(params,context).pipe(
      map((r: StrictHttpResponse<StatisticsResponse>) => r.body as StatisticsResponse)
    );
  }

}
