import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { KalenderComponent} from './../kalendervisning/kalender.component';
import { ListeComponent } from '../listevisning/liste.component';
import { SkoleruterComponent } from './skoleruter.component';

const skoleruterRoutes: Routes = 
[
    { path: 'skoleruter', component: SkoleruterComponent,
    children:
    [    
        {path:'kalender', component: KalenderComponent},
        {path: 'liste', component: ListeComponent},
        {path: '', redirectTo: 'kalender', pathMatch: 'full'}
    ]},
];

export const skoleruterRouting: ModuleWithProviders = RouterModule.forChild(skoleruterRoutes);