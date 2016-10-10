import { Component, OnInit } from '@angular/core';
import { listeService } from './liste.service';

@Component({
    selector: 'liste',
    templateUrl: 'app/listevisning/liste.component.html',
    providers: [ listeService ],
    
})
export class listeComponent implements OnInit {

 
    
    constructor() { 
          
    }

    ngOnInit() { 
       listeService.sjekkListe();      
    }
    
}