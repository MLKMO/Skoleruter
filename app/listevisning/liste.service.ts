import { Injectable, Attribute, OnInit, OnDestroy } from '@angular/core';

import { ValgteSkolerService } from './../valgteSkoler.service';

@Injectable()

export class ListeService{
    private valgteSkoleRuter: Array<any>= [];

    
    nesteSkole(valgteSkoleRuter:Array<any>){
        for (var i = 0; i < valgteSkoleRuter.length; i++){
            if(valgteSkoleRuter[i].skole != valgteSkoleRuter[i-1].skole){
                //her vil jeg lage et "hopp"" slik at vi får en ny liste ved siden av den første skolen
            }
        }
    }

    constructor(private valgteSkolerService: ValgteSkolerService) { }


}