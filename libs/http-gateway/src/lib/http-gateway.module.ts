import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { InMemoryCache } from '@apollo/client/cache';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpGatewayService } from './http-gateway.service';
import { HttpProvider } from './providers/http.provider';
import { GraphQLProvider } from './providers/graphql.provider';
import { MockDataProvider } from '@mono/mocks';

@NgModule({
  imports: [CommonModule, HttpClientModule, ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      useFactory: (httpLink: HttpLink) => {
        return {
          link: httpLink.create({
            uri: '',
            // If needed, you can set custom headers here
            headers: new HttpHeaders({
              'x-api-key': ``,
            }),
          }),
          cache: new InMemoryCache({ addTypename: false }),
        };
      },
      deps: [HttpLink],
    },
    HttpGatewayService,
    HttpProvider,
    GraphQLProvider,
    MockDataProvider,
  ],
})
export class HttpGatewayModule {}
