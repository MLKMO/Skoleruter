import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component'
import { SkoleListeComponent} from './velgSkole/skoleListe.component';
import { SkoleruterComponent } from './routing/skoleruter.component';
import { InfoComponent } from './routing/info.component';
import { PageNotFoundComponent} from './page-not-found.component';
import { LeggIKalenderComponent } from './leggikalender/legg-i-kalender.component'

const appRoutes: Routes =
[
    {path: 'skoleliste',  component: SkoleListeComponent},
    {path: 'skoleruter', component: SkoleruterComponent},
    {path: 'info',       component: InfoComponent},
    {path: 'last-ned-kalender', component: LeggIKalenderComponent},
    {path: '', redirectTo: '/skoleliste', pathMatch: 'full'},
    {path: '**',         component: PageNotFoundComponent} // Midlertidlig navn
];

export const appRoutingProviders: any[] =
[ ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true }); //{ useHash: true } skal løse et problem ved refresh
