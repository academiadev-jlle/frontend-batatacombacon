import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { FormsModule } from '@angular/forms';

import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';


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
    NgbTypeaheadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
