/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHttpGateway } from '@mono/interfaces';

// const inventoryQuery = {
//   GET_ALL: gql``,
//   GET_BY_ID: gql``,
//   MUTATE_CREATE: gql``,
//   MUTATE_UPDATE: gql``,
//   MUTATE_DELETE: gql``,
// };

@Injectable()
/**
 * This is the GraphQL Provider
 */
export class GraphQLProvider implements IHttpGateway {
  constructor(private apollo: Apollo) {}
  public getAll(path: string, options?: any): Observable<any> {
    // return this.apollo.query<any>({ query: inventoryQuery.GET_ALL });
    return new Observable();
  }
  public get(path: string, id: string, options?: any): Observable<any> {
    // return this.apollo.query<any>({
    //   query: inventoryQuery.GET_BY_ID,
    //   ...options,
    // });
    return new Observable();
  }
  public put(
    path: string,
    item: any,
    id: string,
    options?: any
  ): Observable<any> {
    // return this.apollo.mutate<any>({
    //   query: inventoryQuery.MUTATE_CREATE,
    //   ...options,
    // });
    return new Observable();
  }
  public post(path: string, item: any, options?: any): Observable<any> {
    // return this.apollo.mutate<any>({
    //   query: inventoryQuery.MUTATE_UPDATE,
    //   ...options,
    // });
    return new Observable();
  }
  public delete(path: string, id: string, options?: any): Observable<any> {
    // return this.apollo.mutate<any>({
    //   query: inventoryQuery.MUTATE_DELETE,
    //   ...options,
    // });
    return new Observable();
  }
}
