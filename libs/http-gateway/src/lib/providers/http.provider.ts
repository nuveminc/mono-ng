/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHttpGateway } from '@mono/interfaces';

@Injectable()
/**
 * An HTTP Provider for calling any external APIs that are
 * not GraphQL queries and don't use the GraphQL provider.
 * Demonstrates the use of multiple providers.
 * The service implementation can be modified to inject
 * more specific instances of a provider for more specific use cases.
 * e.g. calling Cognito or another API.
 *
 * A Proxy wrapper on the API provider. This utilizes an interface
 * to hide the implementation details and allow 'swapping' of the
 * underlying implementation classes.
 */
export class HttpProvider implements IHttpGateway {
  constructor(private http: HttpClient) {}
  public getAll(path: string, options?: any): Observable<any> {
    return this.http.get<any>(path, options);
  }
  public get(path: string, id: string, options?: any): Observable<any> {
    return this.http.get<any>(path, options);
  }
  public put(
    path: string,
    item: any,
    id: string,
    options?: any
  ): Observable<any> {
    return this.http.put<any>(path, item);
  }
  public post(path: string, item: any, options?: any): Observable<any> {
    return this.http.post<any>(path, item);
  }
  public delete(path: string, id: string, options?: any): Observable<any> {
    return this.http.delete<any>(path, options);
  }
}
