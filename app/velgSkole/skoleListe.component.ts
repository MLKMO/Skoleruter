import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Skole } from './skole';
import { SkoleDataService } from './skoleData.service';
import { ValgteSkolerService } from '../valgteSkoler.service';
import { SkoleRuteData } from './skoleRuteData';

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
  private skoleRute: SkoleRuteData[];


  constructor (private skoledataService: SkoleDataService,
      private valgteSkolerService: ValgteSkolerService,
      private router: Router) {}

  ngOnInit() {
    this.getSkoler();
    this.hentSkoleRuteData();
  }

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


    private skoleruter() {
      if (this.mineSkoler === undefined || this.mineSkoler.length == 0) {
        alert("Du må velge en skole for å gå videre.");
        return;
      }
      this.visSkolerute();
      this.router.navigate(['/skoleruter']);
    }

    private hentSkoleRuteData() {
      this.skoledataService.hentSkoleRuteData()
                       .subscribe(
                         skoleRute => this.skoleRute = skoleRute,
                         error =>  this.errorMessage = <any>error);
    }

    private visSkolerute () {
      let valgteSkoleRuter: Array<any>= [];
      for (let skole of this.skoleRute){
        for (let valgtSkole of this.mineSkoler){
          if(valgtSkole === skole.skole){
            valgteSkoleRuter.push(skole);
          }
        }
      }
      console.log(valgteSkoleRuter[1]);
      console.log(valgteSkoleRuter[1].dato);
      console.log(valgteSkoleRuter[1].skole);
      console.log(valgteSkoleRuter);
      }
  }
