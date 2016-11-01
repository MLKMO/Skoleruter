import { Component } from '@angular/core';


@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/html/navbar.component.html'
})
export class NavbarComponent{
    private skolerValgt: boolean = true;
    constructor() { }

}