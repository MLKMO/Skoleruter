import { Injectable, Attribute, OnInit, OnDestroy } from '@angular/core';
import { ListeComponent } from './liste.component';
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

    skole1(valgteSkoleRuter:Array<any>,skolerute: Array<any>){
        var g = 0;
        var antallValgteSkoler = 1;
        
        for (var i = 0; i < valgteSkoleRuter.length; i++){
            
            if(i > 0){
            if(valgteSkoleRuter[i-1].skole != valgteSkoleRuter[i].skole){
                antallValgteSkoler ++;
            }
            }
            if(antallValgteSkoler == 1){
                skolerute[g] = valgteSkoleRuter[i];
                g++;
            }
        }
        
        return skolerute;
    }

    skole2(valgteSkoleRuter:Array<any>,skolerute: Array<any>){
        var g = 0;
        var antallValgteSkoler = 1;
        for (var i = 0; i < valgteSkoleRuter.length; i++){
            
            if(i > 0){
            if(valgteSkoleRuter[i-1].skole != valgteSkoleRuter[i].skole){
                antallValgteSkoler ++;
            }
            }
            if(antallValgteSkoler == 2){
                skolerute[g] = valgteSkoleRuter[i];
                g++;
            }
        }
        return skolerute;
    }

    skole3(valgteSkoleRuter:Array<any>,skolerute: Array<any>){
        var g = 0;
        var antallValgteSkoler = 1;
        for (var i = 0; i < valgteSkoleRuter.length; i++){
            
            if(i > 0){
            if(valgteSkoleRuter[i-1].skole != valgteSkoleRuter[i].skole){
                antallValgteSkoler ++;
            }
            }
            if(antallValgteSkoler == 3){
                skolerute[g] = valgteSkoleRuter[i];
                g++;
            }
        }
        return skolerute;
    }

    datoer(valgteSkoleRuter:Array<any>, datoArray: Array<any>){
        for (var i = 0; i < valgteSkoleRuter.length; i++){
            datoArray[i] = valgteSkoleRuter[i].dato;
        }

        datoArray = datoArray.sort();
        /*for (var i = 0; i < valgteSkoleRuter.length; i++){
            datoArray[i] = new Date(datoArray[i]);
        }*/
       /* for (var i = 1; i < valgteSkoleRuter.length; i++){  // funker ikke, Hvordan sammmenligne datoer eller strenger?
            if (datoArray[i-1] === datoArray[i]){
                datoArray.splice(i);
            }

        }*/
        let datoArrayFiltrert = Object.keys(datoArray.reduce((c,a) => {c[a] = true; return c;}))


        /*return datoArray;*/
    }

    sjekkOmSkoleHarDato(valgteSkoleRuter:Array<any>, skole: Array<any>){
        var skolesortert: Array<any> = [];
        var datoArray: Array<any> = [];
        for (var i = 0; i < valgteSkoleRuter.length; i++){
            datoArray[i] = valgteSkoleRuter[i].dato;
        }

        datoArray = datoArray.sort();


        for (var i = 0; i < datoArray.length; i++){
            for(var j = 0; j < skole.length; j++){
                if (skole[j].dato == datoArray[i]){  // vil ikke funke før jeg har funnet en måte å sammenligne datoer/strenger
                    skolesortert[i] = skole[j];
                }else{
                    skolesortert[i] = {}
                }
            }
        }
    }

    constructor(private valgteSkolerService: ValgteSkolerService) { }


}



/*en array for dato, og en if for å sjekke om hver skole har noe kommentar
for den datoen, returnerer bare "" om ikke.*/ 