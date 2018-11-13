import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/public/home/home.component';
import { CadastroComponent } from './pages/public/cadastro/cadastro.component';
import { LoginComponent } from './pages/private/login/login.component';
import { ContatoComponent } from './pages/public/contato/contato.component';

const routes: Routes = [
    { path: 'cadastro', component: CadastroComponent},
    { path: 'login', component: LoginComponent},
    { path: 'contato', component: ContatoComponent},
    { path: '', pathMatch: 'full', component: HomeComponent },
    
    { path: 'discover', loadChildren: './public/discover/discover.module#DiscoverModule'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
