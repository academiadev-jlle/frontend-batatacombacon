import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/public/home/home.component';
import { DiscoverComponent } from './pages/public/discover/discover.component';
import { CadastroComponent } from './pages/public/cadastro/cadastro.component';
import { LoginComponent } from './pages/private/login/login.component';
import { ContatoComponent } from './pages/public/contato/contato.component';
import { PetsDetailComponent } from './pages/public/discover/pets-detail/pets-detail.component';


const routes: Routes = [
    { path: 'discover', component: DiscoverComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'login', component: LoginComponent},
    { path: 'contato', component: ContatoComponent},
    { path: '', pathMatch: 'full', component: HomeComponent },

    { path: 'pet/:id', component: PetsDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
