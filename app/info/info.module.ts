import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { infoRouting } from './info.routing';
import { InfoComponent }   from './info.component';
import { InfoLagreComponent } from './info-lagre.component';
import { InfoLastNedKalenderComponent } from './info-last-ned-kalender.component';
import { InfoVelgeSkolerComponent } from './info-velge-skoler.component'; 
import { InfoOmApplikasjonenComponent } from './info-om-applikasjon.component';
import { InfoVarslingComponent } from './info-varsling.component';

@NgModule
({
    imports: [ CommonModule , FormsModule, infoRouting],
    declarations: 
    [InfoComponent, 
    InfoLagreComponent, 
    InfoLastNedKalenderComponent, 
    InfoVelgeSkolerComponent,
    InfoOmApplikasjonenComponent,
    InfoVarslingComponent
    ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class InfoModule { }
