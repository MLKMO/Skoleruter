import { Component, OnInit } from '@angular/core';
import { LeggIKalenderService } from './legg-i-kalender.service';
import { ValgteSkolerService } from './../valgteSkoler.service';

@Component({
    selector: 'legg-i-kalender',
    templateUrl: 'app/leggikalender/html/legg-i-kalender.component.html'
})
export class LeggIKalenderComponent implements OnInit 
{
    constructor(private leggIKalenderService: LeggIKalenderService,
                private valgteSkolerService: ValgteSkolerService) { }

    private valgteSkoler: Array<any>; 
    private kalenderFil:string; 

    leggTilIKalender(kalenderFil:string)
    {
        this.leggIKalenderService.skrivTilFil(kalenderFil);
    }

    lagKalenderFil()
    {
        for(var fridag of this.valgteSkoler)
        {
            this.kalenderFil = this.leggIKalenderService.LagICalKropp(fridag.dato, fridag.skole, fridag.kommentar)
        }

        this.kalenderFil = this.leggIKalenderService.LagICalFil(this.kalenderFil);
        
        this.leggTilIKalender(this.kalenderFil);
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

        console.log(this.valgteSkoler);
    }

    ngOnInit() 
    {
        this.valgteSkolerService.getLagretData();
        this.valgteSkoler = this.valgteSkolerService.getValgteSkoleRuter();
        this.endreDatoFormat(this.valgteSkoler);
    }
}