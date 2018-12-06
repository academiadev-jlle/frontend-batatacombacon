import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { NgbTypeaheadModule, NgbAccordionModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { FileDropModule } from 'ngx-file-drop';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angular-6-social-login';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('493898704450534')
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('970316733015-a0cirmg0f9jkd62ilgkvueomabtrki4l.apps.googleusercontent.com')
        },
      ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbTypeaheadModule,
    NgbAlertModule,
    NgbAccordionModule,
    OAuthModule.forRoot(),
    FileDropModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
