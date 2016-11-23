import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { skoleruterRouting } from './skoleruter.routing';
import { KalenderComponent }   from './../kalendervisning/kalender.component';
import { ListeComponent } from '../listevisning/liste.component';
import { Liste1Component } from '../listevisning/liste1.component';
import { Liste2Component } from '../listevisning/liste2.component';
import { Liste3Component } from '../listevisning/liste3.component';
import { Liste4Component } from '../listevisning/liste4.component';
import { Liste5Component } from '../listevisning/liste5.component';
import { ListeModule } from '../listevisning/liste.module';

@NgModule
({
    imports: [ CommonModule , FormsModule, skoleruterRouting, ListeModule],
    declarations: [KalenderComponent, ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SkoleruteModule { }
