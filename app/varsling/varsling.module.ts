import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { VarslingService } from './varsling.service';

@NgModule
({
    imports: [ CommonModule , FormsModule],
    declarations: [],
    providers: [VarslingService],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class VarslingModule { }