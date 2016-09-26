import { Component, OnInit } from '@angular/core';

import { ValgteSkolerService } from '../valgte-skoler.service';
import {FinnSkolerPipe} from './finn-skoler.pipe';
import {SkolerService} from './../skoler.service';


@Component({
    selector: 'sokefelt',
    templateUrl: 'app/Velgskole/html/sokefelt.component.html', 
    providers:[SkolerService, ValgteSkolerService]
})

export class SokefeltComponent implements OnInit 
{
    skole: string = "";
    mineSkoler: Array<string>
    alleSkoler: Array<string>
    alleSkolerStoreBokst: Array<string>
    indexTilSkole: number

    constructor(private skolerService: SkolerService, private valgteSkolerService: ValgteSkolerService)
                {
                    this.alleSkoler = this.skolerService.hentSkoler();
                    this.alleSkolerStoreBokstaver()

                }
    private alleSkolerStoreBokstaver()
    {
        this.alleSkolerStoreBokst = this.alleSkoler.map(function(skole) 
            { return skole.toUpperCase()})
    }

    private leggTilSkole(skole: string)
    {  
        if (this.alleSkolerStoreBokst.includes(skole.toUpperCase()) == true)
        {
            this.indexTilSkole = this.alleSkolerStoreBokst.indexOf(skole.toUpperCase());
            this.valgteSkolerService.leggTilSkole(this.alleSkoler[this.indexTilSkole]);
            this.skoler();  
        }
        else
        {

        }
          
    }

    // For debugging
    skoler()
    {
      this.mineSkoler = this.valgteSkolerService.mineSkoler();
      console.log(this.mineSkoler)
    }

    
     
    ngOnInit() { }
}