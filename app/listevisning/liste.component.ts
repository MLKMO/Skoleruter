import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
    moduleId: module.id,
    selector: 'liste',
    template: `<h2> Liste </h2>
    <p *ngFor="let rute of valgteSkoleRuter"> {{rute.dato}} {{rute.skole}} {{rute.kommentar}} </p>`
})
export class ListeComponent implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];

    
    constructor(private valgteSkolerService: ValgteSkolerService) { }

    ngOnInit() {
      this.valgteSkoleRuter = this.valgteSkolerService.delteValgteSkoleRuter;
    }
    
    ngOnDestroy(){
    }
}
