import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { ListeService } from './liste.service';
import { ListeComponent } from './liste.component';

@NgModule
({
    imports: [ CommonModule , FormsModule],
    declarations: [ ListeComponent ],
    providers: [ListeService],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ListeModule { }