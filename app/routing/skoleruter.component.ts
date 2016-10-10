import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'skoleruter',
    templateUrl: 'app/routing/html/skoleruter.component.html'
})
export class SkoleruterComponent implements OnInit {
    constructor(private router: Router) {}


    endreSkolevalg()
    {
        this.router.navigate(['/skoleliste']);
    }

    ngOnInit() { }
}
