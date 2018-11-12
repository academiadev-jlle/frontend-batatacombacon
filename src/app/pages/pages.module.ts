import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './public/home/home.module';
import { DiscoverModule } from './public/discover/discover.module';
import { CadastroModule } from './private/cadastro/cadastro.module';
import { ContatoModule } from './public/contato/contato.module';
import { LoginModule } from './private/login/login.module';

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
  declarations: [
  ]
})
export class PagesModule { }
