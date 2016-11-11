import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
    moduleId: module.id,
    selector: 'liste2',
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
        <li style = "width: 145px; text-aligned: center;"><h5>{{this.skolenavn2}}</h5></li>
    </ul>
    <ul>
        <li><p *ngFor="let dato of datoArray">{{dato | kortDato}}</p></li>
        <li><p *ngFor="let rute2 of this.skole2"> {{rute2}} </p></li>
    </ul>
    </div>
    `
})
export class Liste2Component implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    private skole2: Array<any> = [];
    private datoArray: Array<any> = [];
    private skolenavn2 = "";
    
    constructor(private valgteSkolerService: ValgteSkolerService, private listeService: ListeService) { }

    ngOnInit() {
      this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
      this.skole2 = this.listeService.skole2(this.valgteSkolerService.getValgteSkoleRuter(), this.skole2);
      if(typeof this.skole2 !== 'undefined' && this.skole2.length > 0){this.skolenavn2 = this.skole2[1].skole};
      this.datoArray = this.listeService.datoer(this.valgteSkolerService.getValgteSkoleRuter(), this.datoArray);
      if(typeof this.skole2 !== 'undefined' && this.skole2.length > 0){this.skole2 = this.listeService.sjekkOmSkoleHarDato(this.skole2)};
    }

    ngOnDestroy(){
    }
}