import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { ListeService } from './liste.service';
import { ListeComponent } from './liste.component';
import { Liste1Component } from './liste1.component';
import { Liste2Component } from './liste2.component';
import { Liste3Component } from './liste3.component';
import { Liste4Component } from './liste4.component';
import { Liste5Component } from './liste5.component';

@NgModule
({
    imports: [ CommonModule , FormsModule],
    declarations: [ ],
    providers: [ListeService],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ListeModule { }