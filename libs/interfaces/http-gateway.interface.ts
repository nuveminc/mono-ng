/* eslint-disable @typescript-eslint/no-explicit-any */
import { Observable } from 'rxjs';

/**
 * @todo(mpace): should consider adding a generic type to this vs. any
 */
export interface IHttpGateway {
  getAll(path: string, options?: any): Observable<any>;
  get(path: string, id: string, options?: any): Observable<any>;
  put(path: string, item: any, id: string, options?: any): Observable<any>;
  post(path: string, item: any, options?: any): Observable<any>;
  delete(path: string, id: string, options?: any): Observable<any>;
}

export declare type GQueryResult = {
  data: any;
  errors?: any[];
  error?: any;
  loading: boolean;
  networkStatus: any;
  partial?: boolean;
};

export declare type FetchResult = {
  data?: null | undefined;
  extensions?: any;
  context?: any;
};

export declare type IHttpResponse = {
  body?: any | null;
  headers?: any;
  status?: number;
  statusText?: string;
  url?: string;
};

export type HttpOptions = {
  headers?: {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: 'body';
  params?: {
    [param: string]:
      | string
      | number
      | boolean
      | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType: 'arraybuffer';
  withCredentials?: boolean;
};

export declare class HttpContext {
  private readonly map;
  /**
   * Store a value in the context. If a value is already present it will be overwritten.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   * @param value The value to store.
   *
   * @returns A reference to itself for easy chaining.
   */
  set<T>(token: HttpContextToken<T>, value: T): HttpContext;
  /**
   * Retrieve the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns The stored value or default if one is defined.
   */
  get<T>(token: HttpContextToken<T>): T;
  /**
   * Delete the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns A reference to itself for easy chaining.
   */
  delete(token: HttpContextToken<unknown>): HttpContext;
  /**
   * Checks for existence of a given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns True if the token exists, false otherwise.
   */
  has(token: HttpContextToken<unknown>): boolean;
  /**
   * @returns a list of tokens currently stored in the context.
   */
  keys(): IterableIterator<HttpContextToken<unknown>>;
}

/**
 * A token used to manipulate and access values stored in `HttpContext`.
 *
 * @publicApi
 */
export declare class HttpContextToken<T> {
  readonly defaultValue: () => T;
  constructor(defaultValue: () => T);
}
