import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { KalenderComponent} from './../kalendervisning/kalender.component';
import { ListeComponent } from '../listevisning/liste.component';
import { Liste1Component } from '../listevisning/liste1.component';
import { Liste2Component } from '../listevisning/liste2.component';
import { Liste3Component } from '../listevisning/liste3.component';
import { Liste4Component } from '../listevisning/liste4.component';
import { Liste5Component } from '../listevisning/liste5.component';
import { SkoleruterComponent } from './skoleruter.component';
import { ListeModule } from '../listevisning/liste.module';

const skoleruterRoutes: Routes = 
[
    { path: 'skoleruter', component: SkoleruterComponent,
    children:
    [    
        {path:'kalender', component: KalenderComponent},
        {path: 'liste', component: ListeComponent},
        {path: 'liste1', component: Liste1Component},
        {path: 'liste2', component: Liste2Component},
        {path: 'liste3', component: Liste3Component},
        {path: 'liste4', component: Liste4Component},
        {path: 'liste5', component: Liste5Component},
        {path: '', redirectTo: 'kalender', pathMatch: 'full'}
    ]},
];

export const skoleruterRouting: ModuleWithProviders = RouterModule.forChild(skoleruterRoutes);
