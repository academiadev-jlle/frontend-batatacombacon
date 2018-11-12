import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './private/login/login.module';

import { DiscoverModule } from './public/discover/discover.module';
import { CadastroModule } from './public/cadastro/cadastro.module';
import { ContatoModule } from './public/contato/contato.module';
import { HomeModule } from './public/home/home.module';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HomeModule,
    DiscoverModule,
    CadastroModule,
    ContatoModule,
    LoginModule
  ],
  declarations: [ ]
})
export class PagesModule { }
