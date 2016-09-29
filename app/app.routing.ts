import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { FinnSkolerComponent} from './routing/finn-skoler.component';
import { SkoleruterComponent } from './routing/skoleruter.component';
import { InfoComponent } from './routing/info.component';
import { PageNotFoundComponent} from './page-not-found.component';

const appRoutes: Routes = 
[
    {path: 'finnskole',  component: FinnSkolerComponent}, // Midlertidlig navn
    {path: 'skoleruter', component: SkoleruterComponent}, // Midlertidlig navn
    {path: 'info',       component: InfoComponent}, // Midlertidlig navn
    {path: '', redirectTo: '/finnskole', pathMatch: 'full'},
    {path: '**',         component: PageNotFoundComponent} // Midlertidlig navn
];

export const appRoutingProviders: any[] = 
[ ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


