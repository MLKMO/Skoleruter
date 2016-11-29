import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListeService } from '../listevisning/liste.service';
import { ValgteSkolerService } from '../valgte-skoler.service';


@Component({
    selector: 'skoleruter',
    templateUrl: 'app/routing/html/skoleruter.component.html'
})
export class SkoleruterComponent implements OnInit {
    constructor(private router: Router, private valgteSkolerService: ValgteSkolerService, public listeService: ListeService) {}
        private valgteSkoler: Array<any> = [];
        private skolenavn1 = "";
        private skolenavn2 = "";
        private skolenavn3 = "";
        private skolenavn4 = "";
        private skolenavn5 = "";
        private bredde = 0;

    endreSkolevalg()
    {
        this.router.navigate(['/skoleliste']);
    }

    ngOnInit() {
      this.bredde = window.innerWidth;
      let hentvalgteSkoler = localStorage.getItem("valgteSkoler");
      this.valgteSkoler = JSON.parse(hentvalgteSkoler);
      this.valgteSkoler.sort();
      if(this.valgteSkoler.length >= 1){this.skolenavn1 = this.valgteSkoler[0]};
      if(this.valgteSkoler.length >= 2){this.skolenavn2 = this.valgteSkoler[1]};
      if(this.valgteSkoler.length >= 3){this.skolenavn3 = this.valgteSkoler[2]};
      if(this.valgteSkoler.length >= 4){this.skolenavn4 = this.valgteSkoler[3]};
      if(this.valgteSkoler.length >= 5){this.skolenavn5 = this.valgteSkoler[4]};
      this.skolenavn1 = this.listeService.forkortNavnet(this.skolenavn1);
      this.skolenavn2 = this.listeService.forkortNavnet(this.skolenavn2);
      this.skolenavn3 = this.listeService.forkortNavnet(this.skolenavn3);
      this.skolenavn4 = this.listeService.forkortNavnet(this.skolenavn4);
      this.skolenavn5 = this.listeService.forkortNavnet(this.skolenavn5);
     
     }
}
