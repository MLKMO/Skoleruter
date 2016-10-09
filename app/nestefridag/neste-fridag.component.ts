import { Component, OnInit, Attribute } from '@angular/core';
import { DatePipe } from '@angular/common';

import { NesteFridagService } from './neste-fridag.service';

@Component({
    selector: 'neste-fridag',
    templateUrl: 'app/nestefridag/html/neste-fridag.html'
})
export class NesteFridagComponent implements OnInit { 
    
    private dagensDato : Date;
    private nesteFridager: Array<any> = [];
    
    constructor(private nesteFridagService: NesteFridagService){}
    
    dato()
    {
        this.dagensDato = this.nesteFridagService.hentDagensDato();
    }

    ngOnInit() 
    { 
        this.nesteFridagService.setDagensDato(); this.dato(); 
        this.nesteFridagService.finnNesteFridag();
        this.nesteFridager = this.nesteFridagService.finnNesteFridag();
    }
}