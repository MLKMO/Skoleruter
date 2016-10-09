import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { NesteFridagService } from './neste-fridag.service';
import { NesteFridagArray} from './neste-fridag.array';

@NgModule
({
    imports: [ CommonModule , FormsModule],
    declarations: [],
    providers: [NesteFridagService, NesteFridagArray],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NesteFridagModule { }