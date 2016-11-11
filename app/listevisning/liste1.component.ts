import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
    moduleId: module.id,
    selector: 'liste1',
    template:
    `
    <style>

        li {
            display: inline-block;

            margin: 10px;
        }
        h5 {
            font-weight: bold;
        }
    </style>

    <div>
    <ul>
        <li style = "width: 95px;"><h5 style = "margin-left: 20px; margin-right: 10px;">Dato</h5></li>
        <li style = "width: 145px; text-aligned: center;"><h5>{{this.skolenavn1}}</h5></li>
    </ul>
    <ul>
        <li><p *ngFor="let dato of datoArray">{{dato | kortDato}}</p></li>
        <li><p *ngFor="let rute1 of this.skole1"> {{rute1}} </p></li>
    </ul>
    </div>
    `
})
export class Liste1Component implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    private skole1: Array<any> = [];
    private datoArray: Array<any> = [];
    private skolenavn1 = "";
    
    constructor(private valgteSkolerService: ValgteSkolerService, private listeService: ListeService) { }

    ngOnInit() {
        this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
        this.skole1 = this.listeService.skole1(this.valgteSkolerService.getValgteSkoleRuter(), this.skole1);
        if(typeof this.skole1 !== 'undefined' && this.skole1.length > 0){this.skolenavn1 = this.skole1[1].skole};
        this.datoArray = this.listeService.datoer(this.valgteSkolerService.getValgteSkoleRuter(), this.datoArray);
        if(typeof this.skole1 !== 'undefined' && this.skole1.length > 0){this.skole1 = this.listeService.sjekkOmSkoleHarDato(this.skole1)};
        
    }

    ngOnDestroy(){
    }
}
