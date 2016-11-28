import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgteSkoler.service';
import { KortDatoPipe } from '../kort-Dato.pipe';

@Component({
    
    selector: 'liste',
    templateUrl: 'app/listevisning/html/liste.html',
    styleUrls: ['app/listevisning/css/style.css']
})
export class ListeComponent implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    private skole1: Array<any> = [];
    private skole2: Array<any> = [];
    private skole3: Array<any> = [];
    private skole4: Array<any> = [];
    private skole5: Array<any> = [];
    private datoArray: Array<any> = [];
    private skolenavn1 = "";
    private skolenavn2 = "";
    private skolenavn3 = "";
    private skolenavn4 = "";
    private skolenavn5 = "";


    constructor(private valgteSkolerService: ValgteSkolerService, private listeService: ListeService) { }

    ngOnInit() {
      this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
      this.skole1 = this.listeService.skole1(this.valgteSkolerService.getValgteSkoleRuter(), this.skole1);
      this.skole2 = this.listeService.skole2(this.valgteSkolerService.getValgteSkoleRuter(), this.skole2);
      this.skole3 = this.listeService.skole3(this.valgteSkolerService.getValgteSkoleRuter(), this.skole3);
      this.skole4 = this.listeService.skole4(this.valgteSkolerService.getValgteSkoleRuter(), this.skole4);
      this.skole5 = this.listeService.skole5(this.valgteSkolerService.getValgteSkoleRuter(), this.skole5);
      if(typeof this.skole1 !== 'undefined' && this.skole1.length > 0){this.skolenavn1 = this.skole1[1].skole};
      if(typeof this.skole2 !== 'undefined' && this.skole2.length > 0){this.skolenavn2 = this.skole2[1].skole};
      if(typeof this.skole3 !== 'undefined' && this.skole3.length > 0){this.skolenavn3 = this.skole3[1].skole};
      if(typeof this.skole4 !== 'undefined' && this.skole4.length > 0){this.skolenavn4 = this.skole4[1].skole};
      if(typeof this.skole5 !== 'undefined' && this.skole5.length > 0){this.skolenavn5 = this.skole5[1].skole};
      this.datoArray = this.listeService.datoer(this.valgteSkolerService.getValgteSkoleRuter());
      this.datoArray = this.listeService.removePastDates(this.datoArray);
      if(typeof this.skole1 !== 'undefined' && this.skole1.length > 0){this.skole1 = this.listeService.sjekkOmSkoleHarDato(this.skole1)};
      if(typeof this.skole2 !== 'undefined' && this.skole2.length > 0){this.skole2 = this.listeService.sjekkOmSkoleHarDato(this.skole2)};
      if(typeof this.skole3 !== 'undefined' && this.skole3.length > 0){this.skole3 = this.listeService.sjekkOmSkoleHarDato(this.skole3)};
      if(typeof this.skole4 !== 'undefined' && this.skole4.length > 0){this.skole4 = this.listeService.sjekkOmSkoleHarDato(this.skole4)};
      if(typeof this.skole5 !== 'undefined' && this.skole5.length > 0){this.skole5 = this.listeService.sjekkOmSkoleHarDato(this.skole5)};

    }

    ngOnDestroy(){
    }
}
