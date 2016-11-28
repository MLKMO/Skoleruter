import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgte-skoler.service';

@Component({

    selector: 'liste1',
    templateUrl: 'app/listevisning/html/liste1.html',
    styleUrls: ['app/listevisning/css/style.css']
})
export class Liste1Component implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    private skole1: Array<any> = [];
    private datoArray: Array<any> = [];
    private skolenavn1 = "";
    
    constructor(private valgteSkolerService: ValgteSkolerService, private listeService: ListeService) { }

    ngOnInit() {
        this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
        this.skole1 = this.listeService.skole1(this.valgteSkolerService.getValgteSkoleRuter(), this.skole1);
        if(typeof this.skole1 !== 'undefined' && this.skole1.length > 0){this.skolenavn1 = this.skole1[1].skole};
        this.datoArray = this.listeService.datoer(this.valgteSkolerService.getValgteSkoleRuter());
        this.datoArray = this.listeService.removePastDates(this.datoArray);
        if(typeof this.skole1 !== 'undefined' && this.skole1.length > 0){this.skole1 = this.listeService.sjekkOmSkoleHarDato(this.skole1)};
        
    }

    ngOnDestroy(){
    }
}
