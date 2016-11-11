import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
    moduleId: module.id,
    selector: 'liste4',
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
        <li style = "width: 145px; text-aligned: center;"><h5>{{this.skolenavn4}}</h5></li>
    </ul>
    <ul>
        <li><p *ngFor="let dato of datoArray">{{dato | kortDato}}</p></li>
        <li><p *ngFor="let rute4 of this.skole4"> {{rute4}} </p></li>
    </ul>
    </div>
    `
})
export class Liste4Component implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    private skole4: Array<any> = [];
    private datoArray: Array<any> = [];
    private skolenavn4 = "";
    
    constructor(private valgteSkolerService: ValgteSkolerService, private listeService: ListeService) { }

    ngOnInit() {
      this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
      this.skole4 = this.listeService.skole4(this.valgteSkolerService.getValgteSkoleRuter(), this.skole4);
      if(typeof this.skole4 !== 'undefined' && this.skole4.length > 0){this.skolenavn4 = this.skole4[1].skole};
      this.datoArray = this.listeService.datoer(this.valgteSkolerService.getValgteSkoleRuter(), this.datoArray);
      if(typeof this.skole4 !== 'undefined' && this.skole4.length > 0){this.skole4 = this.listeService.sjekkOmSkoleHarDato(this.skole4)};
    }

    ngOnDestroy(){
    }
}