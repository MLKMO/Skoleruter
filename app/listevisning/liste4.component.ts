import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
    selector: 'liste4',
    templateUrl: 'app/listevisning/html/liste4.html',
    styleUrls: ['app/listevisning/css/style.css']

})
export class Liste4Component implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    private skole4: Array<any> = [];
    private datoArray: Array<any> = [];
    private skolenavn4 = "";
    
    constructor(private valgteSkolerService: ValgteSkolerService, private listeService: ListeService) { }

    ngOnInit() {
      this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
      this.skole4 = this.listeService.skole4(this.valgteSkolerService.getValgteSkoleRuter(), this.skole4);
      if(typeof this.skole4 !== 'undefined' && this.skole4.length > 0){this.skolenavn4 = this.skole4[1].skole};
      this.datoArray = this.listeService.datoer(this.valgteSkolerService.getValgteSkoleRuter());
      this.datoArray = this.listeService.removePastDates(this.datoArray);
      if(typeof this.skole4 !== 'undefined' && this.skole4.length > 0){this.skole4 = this.listeService.sjekkOmSkoleHarDato(this.skole4)};
    }

    ngOnDestroy(){
    }
}