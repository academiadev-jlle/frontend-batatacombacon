import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/public/home/home.component';
import { CadastroComponent } from './pages/public/cadastro/cadastro.component';
import { LoginComponent } from './pages/public/login/login.component';
import { ContatoComponent } from './pages/public/contato/contato.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';

import { ProfileComponent } from './pages/private/profile/profile.component';


const routes: Routes = [
    { path: '', redirectTo: '/discover', pathMatch: 'full' },
    { path: 'discover', loadChildren: './pages/public/discover/discover.module#DiscoverModule'},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'login', component: LoginComponent},
    { path: 'contato', component: ContatoComponent},

    //Essa rota será alterada para validar login. Criada assim para desenvolvimento apenas.
    { path: 'profile', component: ProfileComponent },

    // essas 2 tem que ficar por ultimo. Rotas depois delas nao funcionam
    { path: '404', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/404'},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}