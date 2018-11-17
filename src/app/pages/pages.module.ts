import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './private/login/login.module';

import { DiscoverModule } from './public/discover/discover.module';
import { CadastroModule } from './public/cadastro/cadastro.module';
import { ContatoModule } from './public/contato/contato.module';
import { HomeModule } from './public/home/home.module';
import { ProfileComponent } from './private/profile/profile.component';


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
  declarations: [ ProfileComponent]
})
export class PagesModule { }
