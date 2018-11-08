import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DiscoverComponent } from './discover/discover.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'discover', component: DiscoverComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contato', component: ContatoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);