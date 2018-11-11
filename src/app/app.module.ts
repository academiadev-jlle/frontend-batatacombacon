import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatoModule } from './contato/contato.module';
import { HomeModule } from './home/home.module';
import { DiscoverModule } from './discover/discover.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ContatoModule,
    DiscoverModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
