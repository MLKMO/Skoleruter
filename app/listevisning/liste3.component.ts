import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
    moduleId: module.id,
    selector: 'liste3',
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
        <li style = "width: 145px; text-aligned: center;"><h5>{{this.skolenavn3}}</h5></li>
    </ul>
    <ul>
        <li><p *ngFor="let dato of datoArray">{{dato | kortDato}}</p></li>
        <li><p *ngFor="let rute3 of this.skole3"> {{rute3}} </p></li>
    </ul>
    </div>
    `
})
export class Liste3Component implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    private skole3: Array<any> = [];
    private datoArray: Array<any> = [];
    private skolenavn3 = "";
    
    constructor(private valgteSkolerService: ValgteSkolerService, private listeService: ListeService) { }

    ngOnInit() {
      this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
      this.skole3 = this.listeService.skole3(this.valgteSkolerService.getValgteSkoleRuter(), this.skole3);
      if(typeof this.skole3 !== 'undefined' && this.skole3.length > 0){this.skolenavn3 = this.skole3[1].skole};
      this.datoArray = this.listeService.datoer(this.valgteSkolerService.getValgteSkoleRuter(), this.datoArray);
      if(typeof this.skole3 !== 'undefined' && this.skole3.length > 0){this.skole3 = this.listeService.sjekkOmSkoleHarDato(this.skole3)};
    }

    ngOnDestroy(){
    }
}