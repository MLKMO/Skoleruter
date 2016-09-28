import { Component, OnInit } from '@angular/core';
import { listeService } from './liste.service';

@Component({
    selector: 'liste',
    templateUrl: 'app/listevisning/liste.component.html'
    
})
export class listeComponent implements OnInit {

    mineSkoler: Array<string>;
    
    constructor() { }

    ngOnInit() { }
}