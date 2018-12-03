import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './pages/public/cadastro/cadastro.component';
import { LoginComponent } from './pages/public/login/login.component';
import { ContatoComponent } from './pages/public/contato/contato.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';

import { ProfileComponent } from './pages/private/profile/profile.component';
import { RedirectNewUserComponent } from './pages/public/cadastro/redirect-new-user/redirect-new-user.component';
import { NewUserGuard } from './guards/new-user.guard';
import { ProfileGuard } from './guards/profile.guard';
import { NovaSenhaComponent } from './pages/private/nova-senha/nova-senha.component';


const routes: Routes = [
    { path: '', redirectTo: '/discover', pathMatch: 'full' },
    { path: 'discover', loadChildren: './pages/public/discover/discover.module#DiscoverModule'},
    { path: 'login', component: LoginComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'novasenha?id=:id&token=:token', component: NovaSenhaComponent},

    { path: 'bem-vindo', component: RedirectNewUserComponent, canActivate: [NewUserGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard] },

    // essas 2 tem que ficar por ultimo. Rotas depois delas nao funcionam
    { path: '404', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/404'},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
