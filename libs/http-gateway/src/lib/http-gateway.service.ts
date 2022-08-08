/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

import { GraphQLProvider } from './providers/graphql.provider';
import { HttpProvider } from './providers/http.provider';
import { MockDataProvider } from '@mono/mocks';
import { IHttpGateway } from '@mono/interfaces';

/**
 * Provider type for Factory generator HttpGatewayService
 * Can create a provider for either Http/REST or GraphQL
 */
export enum ProviderType {
  Mock = 'mock',
  Http = 'http',
  GraphQL = 'graphql',
}

@Injectable()
/**
 * This is a service in this implementation, but
 * we should consider making this an injectable provider.
 * This implementation follows the Factory Pattern
 *
 * https://www.dofactory.com/javascript/design-patterns/abstract-factory
 *
 */
export class HttpGatewayService {
  public gatewayProvider: IHttpGateway;

  constructor(
    private httpProvider: HttpProvider,
    private grapQLProvider: GraphQLProvider,
    private mockProvider: MockDataProvider
  ) {
    this.gatewayProvider = this.getProvider(ProviderType.Mock);
  }

  public getProvider(providerType: ProviderType): IHttpGateway {
    const provider = {
      mock: () => this.mockProvider,
      http: () => this.httpProvider,
      graphql: () => this.grapQLProvider,
    };
    this.gatewayProvider = provider[providerType]();
    return this.gatewayProvider;
  }
}
