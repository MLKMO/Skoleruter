import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
    moduleId: module.id,
    selector: 'liste5',
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
        <li style = "width: 145px; text-aligned: center;"><h5>{{this.skolenavn5}}</h5></li>
    </ul>
    <ul>
        <li><p *ngFor="let dato of datoArray">{{dato | kortDato}}</p></li>
        <li><p *ngFor="let rute5 of this.skole5"> {{rute5}} </p></li>
    </ul>
    </div>
    `
})
export class Liste5Component implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    private skole5: Array<any> = [];
    private datoArray: Array<any> = [];
    private skolenavn5 = "";
    
    constructor(private valgteSkolerService: ValgteSkolerService, private listeService: ListeService) { }

    ngOnInit() {
      this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
      this.skole5 = this.listeService.skole5(this.valgteSkolerService.getValgteSkoleRuter(), this.skole5);
      if(typeof this.skole5 !== 'undefined' && this.skole5.length > 0){this.skolenavn5 = this.skole5[1].skole};
      this.datoArray = this.listeService.datoer(this.valgteSkolerService.getValgteSkoleRuter(), this.datoArray);
      if(typeof this.skole5 !== 'undefined' && this.skole5.length > 0){this.skole5 = this.listeService.sjekkOmSkoleHarDato(this.skole5)};
    
    }

    ngOnDestroy(){
    }
}