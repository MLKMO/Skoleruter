import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Skole } from './skole';
import { SkoleDataService } from './skoleData.service';
import { ValgteSkolerService } from '../valgteSkoler.service';
import { SkoleRuteData } from './skoleRuteData';

@Component({
  selector: 'skoleListe',
  templateUrl: 'app/velgSkole/html/skoleListe.component.html',
  styleUrls:['app/velgSkole/css/velgSkoleStyle.css'],
  providers: [ SkoleDataService ],
})

export class SkoleListeComponent implements OnInit, OnDestroy {
  private errorMessage: string;       // Feilmelding som kan oppstå ved henting av data fra file eller server
  private skoler: Skole[];            // Skole objekter som bruker kan velge i mellom
  private skolenavn: string = '';     // String som blir hentet fra søkefelt
  private mineSkoler: Array<string>;  // Valgte skoler
  private skoleRute: SkoleRuteData[]; // Brukes til å hente ut skoleruter for valgte skoler
  private valgteSkoleRuter: Array<any>= []; // Data som skal brukes i kalender og liste

  constructor (private skoledataService: SkoleDataService,
      private valgteSkolerService: ValgteSkolerService,
      private router: Router) {}

  ngOnInit() {

    this.valgteSkolerService.hentLagretData();
    if(this.valgteSkolerService.skoler === null ){
      this.getSkoler();
      this.hentSkoleRuteData();
    }else{
      this.skoler = this.valgteSkolerService.skoler;
      this.mineSkoler = this.valgteSkolerService.mineSkoler();
      this.skoleRute = this.valgteSkolerService.skoleRute;
    }
  }
  ngOnDestroy(){
    this.valgteSkolerService.delteValgteSkoleRuter = this.valgteSkoleRuter;
    this.valgteSkolerService.skoler = this.skoler;
    this.valgteSkolerService.skoleRute = this.skoleRute;
    this.valgteSkolerService.lagreDataLokalt();
    this.valgteSkolerService.hentLagretData();
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
      this.valgteSkolerService.leggTilSkole(skole.skole,
         this.skoler.indexOf(skole));
      this.valgteSkoler();
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
      for (let skole of this.skoleRute){
        for (let valgtSkole of this.mineSkoler){
          if(valgtSkole === skole.skole){
            this.valgteSkoleRuter.push(skole);
            }
          }
        }
      }
  }
