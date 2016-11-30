import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgte-skoler.service';

@Component({
    selector: 'liste5',
    templateUrl: 'app/listevisning/html/liste5.html',
    styleUrls: ['app/listevisning/css/style.css']
})
export class Liste5Component implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    private skole5: Array<any> = [];
    private datoArray: Array<any> = [];
    private skolenavn5 = "";
    
    constructor(private valgteSkolerService: ValgteSkolerService, private listeService: ListeService) { }

    ngOnInit() {
      this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
      this.skole5 = this.listeService.skole5(this.valgteSkolerService.getValgteSkoleRuter(), this.skole5);
      if(typeof this.skole5 !== 'undefined' && this.skole5.length > 0){this.skolenavn5 = this.skole5[1].skole};
      this.datoArray = this.listeService.datoer(this.valgteSkolerService.getValgteSkoleRuter());
      this.datoArray = this.listeService.removePastDates(this.datoArray);
      if(typeof this.skole5 !== 'undefined' && this.skole5.length > 0){this.skole5 = this.listeService.sjekkOmSkoleHarDato(this.skole5)};
    
    }

    ngOnDestroy(){
    }
}