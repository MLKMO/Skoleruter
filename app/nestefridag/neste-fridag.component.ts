import { Component, OnInit, Attribute, OnDestroy } from '@angular/core';

import { NesteFridagService } from './neste-fridag.service';
import { ValgteSkolerService } from './../valgteSkoler.service';

@Component
({
    selector: 'neste-fridag',
    templateUrl:'app/nestefridag/html/neste-fridag.html'
})
export class NesteFridagComponent implements OnInit {

    private dagensDato : Date;
    private nesteFridager: Array<any> = [];

    constructor(private nesteFridagService: NesteFridagService,
                private valgteSkolerService: ValgteSkolerService){}

    dato()
    {
        this.dagensDato = this.nesteFridagService.hentDagensDato();
    }

    ngOnInit()
    {
        this.valgteSkolerService.hentLagretData();
        this.nesteFridagService.setDagensDato(); 
        this.dato();
        this.nesteFridager = this.valgteSkolerService.delteValgteSkoleRuter;
        this.nesteFridager = this.nesteFridagService.finnNesteFridag(this.nesteFridager);
        this.nesteFridagService.tomNesteFridagListe();
    }
}
