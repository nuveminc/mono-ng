import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { APP_CONFIG } from '@mono/app-config';
import { UiComponentsModule } from '@mono/ui-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiComponentsModule],
  providers: [{ provide: APP_CONFIG, useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
