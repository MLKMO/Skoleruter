import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'skoleruter',
    template: 
    `    <h1> Skoleruter </h1>
         <nav>
            <a routerLink="/skoleruter/kalender">Kalender</a>
            <a routerLink="/skoleruter/liste">Liste</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class SkoleruterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}