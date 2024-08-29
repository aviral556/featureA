import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { appConfig } from './app.config';  // Import the appConfig

export const serverAppConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    ...appConfig.providers, // Spread the providers from appConfig
  ],
};

export { serverAppConfig as appConfig };  // Export serverAppConfig as appConfig

