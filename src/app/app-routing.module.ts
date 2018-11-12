import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/public/home/home.component';
import { DiscoverComponent } from './pages/public/discover/discover.component';
import { CadastroComponent } from './pages/private/cadastro/cadastro.component';
import { LoginComponent } from './pages/private/login/login.component';
import { ContatoComponent } from './pages/public/contato/contato.component';


const routes: Routes = [
    { path: 'discover', component: DiscoverComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'login', component: LoginComponent},
    { path: 'contato', component: ContatoComponent},
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
