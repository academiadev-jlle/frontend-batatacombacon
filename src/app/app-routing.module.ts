import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/public/home/home.component';
import { CadastroComponent } from './pages/public/cadastro/cadastro.component';
import { ContatoComponent } from './pages/public/contato/contato.component';
import { PageNotFoundComponent } from './pages/public/page-not-found/page-not-found.component';


const routes: Routes = [
    { path: '', redirectTo: '/discover', pathMatch: 'full' },
    { path: 'discover', loadChildren: './pages/public/discover/discover.module#DiscoverModule'},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'login', loadChildren: './pages/private/login/login.module#LoginModule'},
    { path: 'contato', component: ContatoComponent},
    { path: '404', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
