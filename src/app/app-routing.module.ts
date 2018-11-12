import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { DiscoverComponent } from './public/discover/discover.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'discover', component: DiscoverComponent},
    // { path: 'cadastro', component: CadastroComponent},
    // { path: 'login', component: LoginComponent},
    // { path: 'contato', component: ContatoComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
