import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class listeService{
    

    constructor() { 
        
    }
    

    public sjekkListe (){
        var json = [{
        "elevdag": "Nei",
        "kommentar": "Planleggingsdag",
        "sfodag": "Nei",
        "skole": "Auglend skole",
        "dato": "2016-08-15"
        },{
        "elevdag": "Nei",
        "kommentar": "Planleggingsdag",
        "sfodag": "Ja",
        "skole": "Auglend skole",
        "dato": "2016-08-16"
        },{
        "elevdag": "Nei",
        "kommentar": "Planleggingsdag",
        "sfodag": "Ja",
        "skole": "Auglend skole",
        "dato": "2016-08-17"
        }];
        var info: String[];
        for(let dato of json){
            info += [json["dato"], json["kommentar"]];


            console.log(json["kommentar"]);
            console.log(json["dato"]);

        }
    }

}