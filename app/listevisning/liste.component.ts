import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
    moduleId: module.id,
    selector: 'liste',
    template: 
    `
    <style>
        li {
            display: inline;
            float: left;
        }
    </style>
    
    <ul>
        <li><p *ngFor="let dato of datoArray">{{dato}}</p></li>
        <li><p *ngFor="let rute1 of this.skole1"> {{rute1.kommentar}} </p></li>
        <li><p *ngFor="let rute2 of skole2">{{rute2.kommentar}} </p></li>
        <li><p *ngFor="let rute3 of skole3">{{rute3.kommentar}} </p></li>
    </ul>`
})
export class ListeComponent implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    private skole1: Array<any> = [];
    private skole2: Array<any> = [];
    private skole3: Array<any> = [];
    private datoArray: Array<any> = [];
    
    constructor(private valgteSkolerService: ValgteSkolerService, private listeService: ListeService) { }

    ngOnInit() {
      this.valgteSkoleRuter = this.valgteSkolerService.delteValgteSkoleRuter;
      this.skole1 = this.listeService.nesteSkole(this.valgteSkolerService.delteValgteSkoleRuter, this.skole1, this.skole2, this.skole3);
      this.datoArray = this.listeService.datoer(this.valgteSkolerService.delteValgteSkoleRuter, this.datoArray);
    }
    
    ngOnDestroy(){
    }
}
