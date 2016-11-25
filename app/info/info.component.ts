import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'info',
    templateUrl: 'app/info/html/info.component.html'
})
export class InfoComponent implements OnInit {
    constructor() { }
       
    public skrollOmApplikasjonen() {
           this.skroll(260);
    }
    public skrollVelgSkoler() {
           this.skroll(320);
    }
    public skrollLagring() {
           this.skroll(340);
    }
    public skrollLastNedKalender() {
           this.skroll(380);
    }
    public skrollVarsling() {
            this.skroll(400);
    }
    
    private skroll(skrollLengde: number){
        if(window.innerWidth < 600) {
            window.scrollTo(0, skrollLengde);
      }
    }
    
    ngOnInit() { }
}
