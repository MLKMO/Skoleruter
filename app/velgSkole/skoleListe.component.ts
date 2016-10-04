import { Component, OnInit } from '@angular/core';
import { Skole } from './skole';

import { SkoleDataService } from './skoleData.service';
import { ValgteSkolerService } from '../valgteSkoler.service';

@Component({
  selector: 'skoleListe',
  templateUrl: 'app/velgSkole/html/skoleListe.component.html',
  styleUrls:['app/velgSkole/css/velgSkoleStyle.css'],
  providers: [ SkoleDataService, ValgteSkolerService ],
})

export class SkoleListeComponent implements OnInit {
  private errorMessage: string;       // Feilmelding som kan oppstå ved henting av data fra file eller server
  private skoler: Skole[];            // Skole objekter som bruker kan velge i mellom
  private skolenavn: string = '';       // String som blir hentet fra søkefelt
  private mineSkoler: Array<string>;  // Valgte skoler
  private visSkole = true;              // Lager en horisontal linje før hvert skoleobjekt som har Skolenavn

  constructor (private skoledataService: SkoleDataService,
      private valgteSkolerService: ValgteSkolerService) {}

  ngOnInit() { this.getSkoler(); }

    private getSkoler() {
    this.skoledataService.getSkoler()
                     .subscribe(
                       skoler => this.skoler = skoler,
                       error =>  this.errorMessage = <any>error);
    }

    private leggTilSkole(skole: Skole) {
      if(!skole.TrykketPa){
        skole.TrykketPa=true;
      }else{
        skole.TrykketPa=false;
      }
      this.valgteSkolerService.leggTilSkole(skole.Skolenavn,
         this.skoler.indexOf(skole));
      this.valgteSkoler();
      console.log(this.mineSkoler); // Fjernes når elevdager data er på plass
    }

    private valgteSkoler() {
      this.mineSkoler = this.valgteSkolerService.mineSkoler();
    }
  }
