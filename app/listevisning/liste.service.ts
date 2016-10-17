import { Injectable, Attribute, OnInit, OnDestroy } from '@angular/core';

import { ValgteSkolerService } from './../valgteSkoler.service';

@Injectable()

export class ListeService{

    nesteSkole(valgteSkoleRuter:Array<any>,skole1: Array<any>,skole2: Array<any>,skole3: Array<any>){
        var antallValgteSkoler = 1;
        var j = 0;
        var h = 0;
        var g = 0;
        

        for (var i = 0; i < valgteSkoleRuter.length; i++){
            
            if(i > 0){
            if(valgteSkoleRuter[i-1].skole != valgteSkoleRuter[i].skole){
                antallValgteSkoler ++;
            }
            }
            if(antallValgteSkoler == 1){
                skole1[g] = valgteSkoleRuter[i];
                g++;
            }else if(antallValgteSkoler == 2){
                skole2[j] = valgteSkoleRuter[i];
                j ++;
            }else if(antallValgteSkoler == 3){
                skole3[h] = valgteSkoleRuter[i];
                h++;
            }
        }
        return skole1, skole2, skole3;
    }/*del opp og lag en metode som lager hver skole array */

    datoer(valgteSkoleRuter:Array<any>, datoArray: Array<any>){
        for (var i = 0; i < valgteSkoleRuter.length; i++){
            datoArray[i] = valgteSkoleRuter[i].dato;
        }

        datoArray = datoArray.sort();
        for (var i = 1; i < valgteSkoleRuter.length; i++){
            if (datoArray[i].equals(datoArray[i-1])){
                datoArray.splice(i);
            }

        }

        return datoArray;
    }

    constructor(private valgteSkolerService: ValgteSkolerService) { }


}



/*en array for dato, og en if for å sjekke om hver skole har noe kommentar
for den datoen, returnerer bare "" om ikke.*/ 