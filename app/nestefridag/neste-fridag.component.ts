import { Component, OnInit, Attribute, OnDestroy } from '@angular/core';

import { NesteFridagService } from './neste-fridag.service';
import { ValgteSkolerService } from './../valgteSkoler.service';

@Component
({
    moduleId: module.id,
    selector: 'neste-fridag',
    templateUrl:'html/neste-fridag.html'
})
export class NesteFridagComponent implements OnInit {

    public nesteFridager: Array<any> = [];

    constructor(private nesteFridagService: NesteFridagService,
                private valgteSkolerService: ValgteSkolerService){}

    ngOnInit()
    {
        this.valgteSkolerService.hentLagretData();
        this.nesteFridagService.setDagensDato(); 
        this.nesteFridager = this.valgteSkolerService.delteValgteSkoleRuter;
        this.nesteFridager = this.nesteFridagService.finnNesteFridag(this.nesteFridager);
        this.nesteFridagService.tomNesteFridagListe();
    }
}
