import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event as NavigationEvent } from '@angular/router';


@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/html/navbar.component.html'
})
export class NavbarComponent{
    private skolerValgt: boolean = false;
    private viserInfo: boolean = false;

    constructor(private router: Router) 
    {
        router.events.subscribe((val) => {
            if(location.href.includes('skoleruter'))
            {
                this.skolerValgt = true;
            }
            else
            {
                this.skolerValgt = false;
            }
        });

         router.events.subscribe((val) => {
            if(location.href.includes('info'))
            {
                this.viserInfo = true;
            }
            else
            {
                this.viserInfo = false;
            }
        });   
    }
}