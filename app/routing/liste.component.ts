import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
    moduleId: module.id,
    selector: 'liste',
    template: `
    <p *ngFor="let rute of valgteSkoleRuter"> {{rute.dato}} {{rute.skole}} {{rute.kommentar}} </p>`
})
export class ListeComponent implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    constructor(private valgteSkolerService: ValgteSkolerService) { }

    ngOnInit() {
      this.valgteSkolerService.getLagretData();
      this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
    }

    ngOnDestroy(){
    }
}
