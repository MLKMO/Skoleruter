import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { skoleruterRouting } from './skoleruter.routing';
import { KalenderComponent }   from './../kalendervisning/kalender.component';
import { ListeComponent } from '../listevisning/liste.component';
import { ListeModule } from '../listevisning/liste.module';

@NgModule
({
    imports: [ CommonModule , FormsModule, skoleruterRouting, ListeModule],
    declarations: [KalenderComponent, ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SkoleruteModule { }
