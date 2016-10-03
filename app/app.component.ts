import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: 
    `
        <h1>Angular App</h1>
        <nav>
            <a routerLink="/finnskole">Finn skole</a>
            <a routerLink="/skoleruter">Skoleruter</a>
            <a routerLink="/info">Info</a>
        </nav>
        <router-outlet></router-outlet>
    ` 
})
export class AppComponent { }
