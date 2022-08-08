import { InjectionToken } from '@angular/core';

export interface IEnvironment {
  production: boolean;
  graphql: {
    apiUrl: string;
    apiKey: string;
    wssUrl: string;
  };
}

/**
 * The APP_CONFIG token can be used to access the environment variable
 * throughout the application including the library components in the libs directory.
 *
 * To include the token, it can be added as a provider in the @NgModules.
 *
 * @NgModules({
 *    declarations: [...],
 *    providers: [{ provide: APP_CONFIG, useValue: environment }],
 *    imports: [...]
 * })
 *
 * And used in any Component or Service
 */
export const APP_CONFIG = new InjectionToken<IEnvironment>(
  'Application environment config'
);
