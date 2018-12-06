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
import { AddPetComponent } from './pages/private/add-pet/add-pet.component';
import { EditPetComponent } from './pages/private/edit-pet/edit-pet.component';


const routes: Routes = [
    { path: '', redirectTo: '/discover', pathMatch: 'full' },
    { path: 'discover', loadChildren: './pages/public/discover/discover.module#DiscoverModule'},
    { path: 'login', component: LoginComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'contato', component: ContatoComponent},

    { path: 'bem-vindo', component: RedirectNewUserComponent, canActivate: [NewUserGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard] },

    { path: 'editpet/:id', component: EditPetComponent}, //TODO: adicionar guard aqui
    { path: 'addpet', component: AddPetComponent}, // TODO: adicionar guard aqui

    // essas 2 tem que ficar por ultimo. Rotas depois delas nao funcionam
    { path: '404', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/404'},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
