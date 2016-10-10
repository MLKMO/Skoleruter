import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
    moduleId: module.id,
    selector: 'kalender',
    template: `<h2> Kalender </h2>
    <p *ngFor="let rute of valgteSkoleRuter"> {{rute.dato}} {{rute.skole}} {{rute.kommentar}} </p>`
})
export class KalenderComponent implements OnInit, OnDestroy {
    private valgteSkoleRuter: Array<any>= [];
    constructor(private valgteSkolerService: ValgteSkolerService) { }

    ngOnInit() {
      this.valgteSkolerService.hentLagretData();
      this.valgteSkoleRuter = this.valgteSkolerService.delteValgteSkoleRuter;
    }

    ngOnDestroy() {
    }
}
