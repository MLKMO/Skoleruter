import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { InfoComponent } from './info.component';
import { InfoVelgeSkolerComponent } from './info-velge-skoler.component';
import { InfoLagreComponent } from './info-lagre.component';
import { InfoLastNedKalenderComponent } from './info-last-ned-kalender.component';
import { InfoOmApplikasjonenComponent } from './info-om-applikasjon.component';



const infoRoutes: Routes = 
[
    { path: 'info', component: InfoComponent,
    children:
    [    
        {path:'velgeskoler', component: InfoVelgeSkolerComponent},
        {path: 'lagring', component: InfoLagreComponent},
        {path: 'lastnedkalender', component: InfoLastNedKalenderComponent}, 
        {path: 'omapplikasjon', component: InfoOmApplikasjonenComponent}, 
    ]},
];

export const infoRouting: ModuleWithProviders = RouterModule.forChild(infoRoutes);