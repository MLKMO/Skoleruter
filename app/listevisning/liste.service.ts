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
    skole4(valgteSkoleRuter:Array<any>,skolerute: Array<any>){
        var g = 0;
        var antallValgteSkoler = 1;
        for (var i = 0; i < valgteSkoleRuter.length; i++){
            
            if(i > 0){
            if(valgteSkoleRuter[i-1].skole != valgteSkoleRuter[i].skole){
                antallValgteSkoler ++;
            }
            }
            if(antallValgteSkoler == 4){
                skolerute[g] = valgteSkoleRuter[i];
                g++;
            }
        }
        return skolerute;
    }
    skole5(valgteSkoleRuter:Array<any>,skolerute: Array<any>){
        var g = 0;
        var antallValgteSkoler = 1;
        for (var i = 0; i < valgteSkoleRuter.length; i++){
            
            if(i > 0){
            if(valgteSkoleRuter[i-1].skole != valgteSkoleRuter[i].skole){
                antallValgteSkoler ++;
            }
            }
            if(antallValgteSkoler == 5){
                skolerute[g] = valgteSkoleRuter[i];
                g++;
            }
        }
        return skolerute;
    }
private datoArray: Array<any> = [];
    datoer(valgteSkoleRuter:Array<any>, datoArray: Array<any>){
        for (var i = 0; i < valgteSkoleRuter.length; i++){
            this.datoArray[i] = valgteSkoleRuter[i].dato;
        }

        this.datoArray = this.datoArray.sort();
        
        for (var i = 1; i < this.datoArray.length; i++) {  
            if (this.datoArray[i] === this.datoArray[i-1]) {
                this.datoArray.splice(i, 1);
            }

        }
         for (var i = 1; i < this.datoArray.length; i++) {  
            if (this.datoArray[i] === this.datoArray[i-1]) {
                this.datoArray.splice(i, 1);
            }

        }
         for (var i = 1; i < this.datoArray.length; i++) {  
            if (this.datoArray[i] === this.datoArray[i-1]) {
                this.datoArray.splice(i, 1);
            }

        }
        for (var i = 1; i < this.datoArray.length; i++) { 
            if (this.datoArray[i] === this.datoArray[i-1]) {
                this.datoArray.splice(i, 1);
            }

        }
        return this.datoArray;
    }


     
    sjekkOmSkoleHarDato(skole: Array<any>){
        var skolesortert: Array<any> = [];

        for (var i = 0; i < this.datoArray.length; i++){
            skolesortert.push("-");
            for(var j = 0; j < skole.length; j++){
                if (skole[j].dato === this.datoArray[i]){  
                    skolesortert[i] = skole[j].kommentar;
                }
            }
        }
        return skolesortert;
    }

    constructor(private valgteSkolerService: ValgteSkolerService) { }


}


