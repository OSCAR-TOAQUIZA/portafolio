import { Routes, RouterModule } from '@angular/router';

import {
    AboutComponent,
    PortafolioComponent,
    PortafolioIndividualComponent,
    SearchComponent
} from './component/index.pages';

const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'buscar/:termino', component: SearchComponent},
    { path: 'producto/:id', component: PortafolioIndividualComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];


export const app_router = RouterModule.forRoot(routes, {useHash: true});
