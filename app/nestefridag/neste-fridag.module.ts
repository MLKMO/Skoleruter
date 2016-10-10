import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { NesteFridagService } from './neste-fridag.service';

@NgModule
({
    imports: [ CommonModule , FormsModule],
    declarations: [],
    providers: [NesteFridagService],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NesteFridagModule { }