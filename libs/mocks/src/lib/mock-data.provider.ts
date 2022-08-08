/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchResult } from '@apollo/client';
import { Observable } from 'rxjs';
import {
  capabilities,
  company,
  facilities,
  inventory,
  orders,
  users,
} from './data';
import { v4 as uuid } from 'uuid';

import { GQueryResult, IHttpGateway, IHttpResponse } from '@mono/interfaces';

/**
 * Mock data provider to allow mock data
 * to be returned without an API endpoint.
 * Allows testing disconnected from a network or APIs.
 */
export class MockDataProvider implements IHttpGateway {
  private models: any = {};

  constructor() {
    this.models = {
      capabilities,
      company,
      facilities,
      inventory,
      orders,
      users,
    };
  }

  /**
   * Get a single or multiple objects/
   * Path would be [model]/id if requesting a specific object
   *
   * @param path the path passed in by the repository
   * @returns the model referenced by the path segment
   */
  getAll(path: string, options?: any): Observable<any> {
    const [modelName] = this._getEndpoint(path);
    const data = this._getResponse(modelName);
    return new Observable((observer) => {
      observer.next([...data.body]);
    });
  }

  /**
   * Get a single or multiple objects/
   * Path would be [model]/id if requesting a specific object
   *
   * @param path the path passed in by the repository
   * @returns the model referenced by the path segment
   */
  get(path: string, id: string, options?: any): Observable<any> {
    const [modelName] = this._getEndpoint(path);
    const response = this._getResponse(modelName);
    const item = response.body.filter((i: any) => i._id === id);
    return new Observable((observer) => {
      observer.next(item);
    });
  }

  /**
   * Modify the object
   *
   * @param path the path passed in by the repository
   * @param item a new data object to be modified
   * @param id the id of the object to be modified
   */
  put(path: string, item: any, id: string, options?: any): Observable<any> {
    const [modelName] = this._getEndpoint(path);
    const updateItem = this.models[modelName].filter((i: any) => i._id === id);
    this.models[modelName] = this.models[modelName].map((i: any) =>
      i._id === item._id ? updateItem : i
    );
    return new Observable((observer) => {
      const update = {
        ...updateItem,
        ...item,
      };
      observer.next(update);
    });
  }

  /**
   * Create a new object
   *
   * @param path passed in by repository to endpoint
   * @param item data object to be created
   */
  post(path: string, item: any, options?: any): Observable<any> {
    const [modelName, id] = this._getEndpoint(path);
    item._id = uuid();
    this.models[modelName].push(item);
    return new Observable((observer) => {
      observer.next(item);
    });
  }

  /**
   * Delete object using id
   * NOT IMPLEMENTED
   *
   * @param path passed in by repository to endpoint
   * @param id of the object to delete
   */
  delete(path: string, id: string, options?: any): Observable<any> {
    const [modelName] = this._getEndpoint(path);
    return new Observable((observer) => {
      observer.next({});
    });
  }

  /**
   * Mock return of data from requested endpoint
   *
   * @param path of the endpoint
   * @returns model name and id if an id segment is passed
   */
  private _getEndpoint(path: string): string[] {
    let modelName = path;
    let id = '';
    if (path.indexOf('/') > -1) {
      [modelName, id] = path.split('/');
    }
    return [modelName, id];
  }

  /**
   * Get the mocked response from the static data file
   *
   * @param modelName name of the model to retrieve
   * @returns a mocked response with the mock/static data
   */
  private _getResponse(modelName: string): IHttpResponse {
    const data = this.models[modelName];
    return this._getHttpResponse(data);
  }

  /**
   * Can be used as the return result type. Currently unused,
   * but an exercise to set different return types for each provider.
   *
   * @param data Response data
   * @returns A query result
   */
  private _getQueryResponse(data: any): GQueryResult {
    return {
      data,
      errors: [],
      error: null,
      loading: false,
      networkStatus: null,
      partial: false,
    };
  }

  /**
   * Can be used as the return result type. Currently unused,
   * but an exercise to set different return types for each provider.
   *
   * @param data Response data
   * @returns A query result
   */
  private _getFetchResponse(data: any): FetchResult {
    return {
      data,
      extensions: [],
      context: {},
    };
  }

  /**
   * The return result type. Currently used to return mock data
   *
   * @param data Response data
   * @returns A query result   */
  private _getHttpResponse(data: any): IHttpResponse {
    return {
      body: data,
      headers: {
        'content-type': 'application/json',
      },
      status: 200,
      statusText: 'success',
      url: '',
    };
  }
}

export const mockDataProvider = new MockDataProvider();
