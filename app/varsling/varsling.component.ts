import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VarslingService } from './varsling.service';

@Component
({
    selector: 'varsling-komponent',
    templateUrl:'/app/varsling/html/varsling.html',
    styleUrls:['app/varsling/css/varsling-style.css']
})
export class VarslingKomponent implements OnInit {
    
    constructor( private varslingService: VarslingService, private router: Router){}
    private abonnerer = "";
    private erNettleserLikSafari = false;
    
    ngOnInit()
    {
        this.skjul_for_safari();
        this.varslingService.getTopics();
    }
    
    // Skjuler varsling for safari nettlesere fordi firebase cloud messaging ikke er støttet i safari
   private skjul_for_safari(){
        this.erNettleserLikSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                   navigator.userAgent && !navigator.userAgent.match('CriOS');
   }

   private ga_til_infoside() {
      this.router.navigate(['/info/varsling']);
      window.scrollTo(0,0); //Scroller window til toppen av siden
    }
   
   private set_abonnerer(){
    this.abonnerer ="true";
      localStorage.setItem("abonnerer", this.abonnerer);
   } 

   private stopp_abonnement(){
       this.abonnerer = "";
       localStorage.setItem("abonnerer", this.abonnerer);
   }
}