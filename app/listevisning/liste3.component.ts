import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
    selector: 'liste3',
    templateUrl: 'app/listevisning/html/liste3.html',
    styleUrls: ['app/listevisning/css/style.css']

})
export class Liste3Component implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    private skole3: Array<any> = [];
    private datoArray: Array<any> = [];
    private skolenavn3 = "";
    
    constructor(private valgteSkolerService: ValgteSkolerService, private listeService: ListeService) { }

    ngOnInit() {
      this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
      this.skole3 = this.listeService.skole3(this.valgteSkolerService.getValgteSkoleRuter(), this.skole3);
      if(typeof this.skole3 !== 'undefined' && this.skole3.length > 0){this.skolenavn3 = this.skole3[1].skole};
      this.datoArray = this.listeService.datoer(this.valgteSkolerService.getValgteSkoleRuter());
      this.datoArray = this.listeService.removePastDates(this.datoArray);
      if(typeof this.skole3 !== 'undefined' && this.skole3.length > 0){this.skole3 = this.listeService.sjekkOmSkoleHarDato(this.skole3)};
    }

    ngOnDestroy(){
    }
}