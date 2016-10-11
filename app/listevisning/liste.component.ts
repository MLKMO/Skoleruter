import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListeService } from './liste.service';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
    moduleId: module.id,
    selector: 'liste',
    templateUrl: 'app/listevisning/html/liste.html'
})
export class ListeComponent implements OnInit, OnDestroy {
    
    private skole1: Array<any> = [];
    private skole2: Array<any> = [];
    private skole3: Array<any> = [];
    
    constructor(private listeService: ListeService) { }

    ngOnInit() {
      
      this.skole1 = this.listeService.skole1;
      this.skole2 = this.listeService.skole2;
      this.skole3 = this.listeService.skole3;
    }
    
    ngOnDestroy(){
    }
}
