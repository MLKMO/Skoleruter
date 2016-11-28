import { Component, OnInit, OnDestroy } from '@angular/core';
import { LeggIKalenderService } from './legg-i-kalender.service';
import { ValgteSkolerService } from './../valgteSkoler.service';

@Component({
    selector: 'legg-i-kalender',
    templateUrl: 'app/leggikalender/html/legg-i-kalender.component.html'
})
export class LeggIKalenderComponent implements OnInit, OnDestroy
{
    constructor(private leggIKalenderService: LeggIKalenderService,
                private valgteSkolerService: ValgteSkolerService) { }

    private valgteSkoler: Array<any>; 
    private kalenderFil:string; 
    private skolerValgt: boolean = true;

    lastNedKalender(kalenderFil:string)
    {
        this.leggIKalenderService.lastNedKalender(kalenderFil);
    }

    lagKalenderFil()
    {
        for(var datoer of this.valgteSkoler)
        {
            this.kalenderFil = this.leggIKalenderService.lagICalKropp(datoer.dato, datoer.skole, datoer.kommentar)
        }

        this.kalenderFil = this.leggIKalenderService.LagICalFil(this.kalenderFil);
        
        this.lastNedKalender(this.kalenderFil);
    }

    endreDatoFormat(valgteSkoler:Array<any>)
    {
        let i = 0;
        for(var skole of valgteSkoler)
        {
            let aar = skole.dato.slice(0,4);
            let maaned = skole.dato.slice(5,7);
            let dag = skole.dato.slice(8,10)

            this.valgteSkoler[i].dato = aar+ "" + maaned + "" + dag;
            i ++;
        }
    }

    ngOnInit() 
    {
        this.valgteSkolerService.getLagretData();
        this.valgteSkoler = this.valgteSkolerService.getValgteSkoleRuter();
        this.endreDatoFormat(this.valgteSkoler);

        if(this.valgteSkolerService.getValgteSkoleRuter().length <= 0)
        {
            this.skolerValgt = false; 
        }
    }

    ngOnDestroy()
    {
        this.valgteSkoler = [];
        this.kalenderFil = "";
        this.leggIKalenderService.tomAlleVariabler();
    }
}