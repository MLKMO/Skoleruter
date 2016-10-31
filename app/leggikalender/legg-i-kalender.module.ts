import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { LeggIKalenderService } from './legg-i-kalender.service';

@NgModule
({
    imports: [ CommonModule , FormsModule],
    declarations: [],
    providers: [LeggIKalenderService],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LeggIKalenderModule { }