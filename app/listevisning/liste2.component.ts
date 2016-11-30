import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgte-skoler.service';

@Component({
    selector: 'liste2',
    templateUrl: 'app/listevisning/html/liste2.html',
    styleUrls: ['app/listevisning/css/style.css']
})
export class Liste2Component implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    private skole2: Array<any> = [];
    private datoArray: Array<any> = [];
    private skolenavn2 = "";
    
    constructor(private valgteSkolerService: ValgteSkolerService, private listeService: ListeService) { }

    ngOnInit() {
      this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
      this.skole2 = this.listeService.skole2(this.valgteSkolerService.getValgteSkoleRuter(), this.skole2);
      if(typeof this.skole2 !== 'undefined' && this.skole2.length > 0){this.skolenavn2 = this.skole2[1].skole};
      this.datoArray = this.listeService.datoer(this.valgteSkolerService.getValgteSkoleRuter());
      this.datoArray = this.listeService.removePastDates(this.datoArray);
      if(typeof this.skole2 !== 'undefined' && this.skole2.length > 0){this.skole2 = this.listeService.sjekkOmSkoleHarDato(this.skole2)};
    }

    ngOnDestroy(){
    }
}