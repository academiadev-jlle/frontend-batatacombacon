import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { NgbTypeaheadModule, NgbAccordionModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FileDropModule } from 'ngx-file-drop';
import { DisqusModule, DISQUS_SHORTNAME } from "ngx-disqus";

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
    DisqusModule.forRoot('frontendbatatacombacon')
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
    { provide: DISQUS_SHORTNAME,
      useValue: 'frontendbatatacombacon' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
