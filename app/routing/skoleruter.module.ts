import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { skoleruterRouting } from './skoleruter.routing';
import { KalenderComponent }   from './../kalendervisning/kalender.component';
import { ListeComponent } from '../listevisning/liste.component';

@NgModule
({
    imports: [ CommonModule , FormsModule, skoleruterRouting],
    declarations: [KalenderComponent, ListeComponent],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SkoleruteModule { }