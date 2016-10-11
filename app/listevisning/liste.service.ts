import { Injectable, Attribute, OnInit, OnDestroy } from '@angular/core';

import { ValgteSkolerService } from './../valgteSkoler.service';

@Injectable()

export class ListeService{
    private valgteSkoleRuter: Array<any>= [];

        public skole1: Array<any> = [];
        public skole2: Array<any> = [];
        public skole3: Array<any> = [];
    nesteSkole(valgteSkoleRuter:Array<any>,skole1: Array<any>,skole2: Array<any>,skole3: Array<any>){
        var antallValgteSkoler = 1;

        for (var i = 1; i < valgteSkoleRuter.length; i++){
            if(valgteSkoleRuter[i].skole != valgteSkoleRuter[i-1].skole){
                antallValgteSkoler ++;
            }
            if(antallValgteSkoler == 1){
                skole1 += valgteSkoleRuter[i];
            }else if(antallValgteSkoler == 2){
                skole2 += valgteSkoleRuter[i];
            }else if(antallValgteSkoler == 3){
                skole3 += valgteSkoleRuter[i];
            }
        }
        return this.skole1, this.skole2, this.skole3;
    }

    constructor(private valgteSkolerService: ValgteSkolerService) { }


}