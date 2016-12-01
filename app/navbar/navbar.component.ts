import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event as NavigationEvent } from '@angular/router';

import { ValgteSkolerService } from '../valgte-skoler.service';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/html/navbar.component.html'
})
export class NavbarComponent
{
    private skolerValgt: boolean = false;
    private viserInfo: boolean = false;
    private viserLastNedKalender: boolean = false;
    private valgteSkoler: Array<string>;

    constructor(private router: Router, private valgteSkolerService: ValgteSkolerService) 
    {
            
            this.sjekk_om_skoler_er_valgt();

        router.events.subscribe((val) => {
            if(location.href.includes('skoleruter'))
            {
                
                this.sjekk_om_skoler_er_valgt();
            }
            else
            {
                this.skolerValgt = false;
            }
        });
        

         router.events.subscribe((val) => {
            if(location.href.includes('info'))
            {
               this.sjekk_om_skoler_er_valgt();
            }
            else
            {
                this.viserInfo = false;
            }
        });  

        router.events.subscribe((val) => {
            if(location.href.includes('last-ned-kalender'))
            {
                this.sjekk_om_skoler_er_valgt();
            }
            else
            {
                this.viserLastNedKalender = false;
            }
        }); 
    }

    private sjekk_om_skoler_er_valgt(){
        this.valgteSkolerService.getLagretData();
        this.valgteSkoler= this.valgteSkolerService.getValgteSkoler();
        if(this.valgteSkoler.length === 0){
            this.skolerValgt = false;     
        }else{
            this.skolerValgt = true;
        }
    }
}