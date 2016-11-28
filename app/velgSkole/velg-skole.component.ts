import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Skole } from './skole.type';
import { BrukerPosisjonService } from './bruker-posisjon.service';
import { SkoleDataService } from './skole-data.service';
import { ValgteSkolerService } from '../valgte-skoler.service';
import { SkoleRuteData } from './skole-rute-data.type';

@Component({
  selector: 'skoleListe',
  templateUrl: 'app/velgSkole/html/skoleListe.component.html',
  styleUrls:['app/velgSkole/css/velgSkoleStyle.css'],
  providers: [ SkoleDataService, BrukerPosisjonService ],
})

export class SkoleListeComponent implements OnInit, OnDestroy {
  private errorMessage: string;                               // Feilmelding som kan oppstå ved henting av data fra file eller server.
  private skoler: Array<Skole>;                               // Skole objekter som brukeren kan velge i mellom.
  private skolenavn: string = '';                             // String som blir hentet fra søkefelt.
  private brukerensValgteSkoler: Array<string>;                          // Valgte skoler. Brukes også som boolean for visning av liste etc.
  private skoleRuterFraJsonFil: Array<SkoleRuteData>;         // Brukes til å hente ut skoleruter for valgte skoler.
  private valgteSkoleRuter: Array<any> = [];                  // Data som skal brukes i kalender og liste.
  private visKnapper = false;                                 // Boolsk variabel som styrer visning av knapper (Vis skolerute og Fjern Skoler).
  private brukerPosisjonLatutude: number;
  private brukerPosisjonLongitude: number;
  private sorterKnappTrykketPa = false;
  private datoer: Array<any>;                                //Array som blir hentet inn og brukt i kalendervisningen til å skille datorutene fra hverandre.
  private sorterAnimasjon: boolean = false;                  //Brukes til å vise loading animasjon når bruker posisjon innhentes.
  private visKm: boolean = false;
  private posisjonIkkeTilgjengelig :boolean = false;         
  private visSorterKnapp:boolean = true;

  constructor (private skoledataService: SkoleDataService,
      private valgteSkolerService: ValgteSkolerService,
      private router: Router,
      private brukerPosisjonService: BrukerPosisjonService) {}

  ngOnInit() {
    this.valgteSkolerService.getLagretData();
    if(this.valgteSkolerService.getSkoler() === null ){
      this.setdatoene();
      this.getSkolerData();
      this.getSkoleRuteData();
    }else{
      this.skoler = this.valgteSkolerService.getSkoler();
      this.brukerensValgteSkoler = this.valgteSkolerService.getValgteSkoler();
      this.visEllerSkjulKnapper();
      this.skoleRuterFraJsonFil = this.valgteSkolerService.getSkoleRute();
      this.datoer = this.valgteSkolerService.getDatoer();
    }
  }

  ngOnDestroy() {
    this.lagSkoleruteForValgteSkoler();
    this.valgteSkolerService.setDatoer(this.datoer);
    this.valgteSkolerService.setValgteSkoleRuter(this.valgteSkoleRuter);
    this.valgteSkolerService.setSkoler(this.skoler);
    this.valgteSkolerService.setSkoleRute(this.skoleRuterFraJsonFil);
    this.valgteSkolerService.setLagreDataLokalt();
  }

    public skrollSokefeltTilToppen() {
      if(window.innerWidth < 769) {
        window.scrollTo(0, 140);
      }
    }

    public getSkoler() {
      return this.skoler;
    }
    public getSkoleRute() {
      return this.skoleRuterFraJsonFil;
    }

    private setdatoene() {
    this.skoledataService.getDato()
                     .subscribe(
                       datoer => {this.datoer = datoer;
                          this.valgteSkolerService.lagreDatoerLokalt(this.datoer);
                       },
                       error =>  this.errorMessage = <any>error);
    }

    public getDatoer(): Array<any>  {
		  return this.datoer;
	}

    private getSkolerData() {
    this.skoledataService.getSkoler()
                     .subscribe(
                       skoler => this.skoler = skoler,
                       error =>  this.errorMessage = <any>error);
    }

    private getSkoleRuteData() {
        this.skoledataService.getSkoleRuteData()
                         .subscribe(
                           skoleRuterFraJsonFil => this.skoleRuterFraJsonFil = skoleRuterFraJsonFil,
                           error =>  this.errorMessage = <any>error);
    }

    private getBrukerPosisjon() {
        this.sorterKnappTrykketPa = true;
        this.sorterAnimasjon = true;
        setInterval(() => { this.stoppSorteringsAnimasjon(); }, 5000 );
        if (navigator.geolocation) {
            this.brukerPosisjonService.getBrukerPosisjon().forEach(
                (position: Position) => {
                        this.brukerPosisjonLatutude = position.coords.latitude;
                        this.brukerPosisjonLongitude =  position.coords.longitude;
                        this.skoler = this.brukerPosisjonService.sorterSkolerEtterAvstand(this.brukerPosisjonLatutude,
                          this.brukerPosisjonLongitude, this.skoler);
                          this.visKm = true;
                          this.sorterAnimasjon = this.brukerPosisjonService.sorterAnimasjon;
            })
        } else {
            alert("Du må bruke en støttet nettleser for å sortere etter lokasjon");
        }
    }
    
    private stoppSorteringsAnimasjon(){
      this.sorterAnimasjon = false;
    }
    
    private leggTilSkole(skole: Skole) {
      if(!skole.TrykketPa){
        skole.TrykketPa = true;
      }else{
        skole.TrykketPa = false;
      }
      this.valgteSkolerService.leggTilSkole(skole.skole,
         this.skoler.indexOf(skole));
      this.valgteSkoler();
      this.visEllerSkjulKnapper();
      this.skolenavn = "";
      this.visSorterKnapp=false;
    }

    private fjernValgteSkoler() {
      this.valgteSkolerService.nullstillVariabler();
      this.valgteSkolerService.fjernLagretData();
      this.nullstillVariabler();
      this.visEllerSkjulKnapper();
      this.visSorterKnapp = true;
    }

    private valgteSkoler() {
      this.brukerensValgteSkoler = this.valgteSkolerService.getValgteSkoler();
    }

    private visEllerSkjulKnapper() {
      if (this.brukerensValgteSkoler === undefined || this.brukerensValgteSkoler.length == 0) {
        this.skjulSkoleruteKnapp();
      }else{
        this.visSkoleruteKnapp();
      }
    }

    private gaVidereTilSkoleruter() {
      
      this.router.navigate(['/skoleruter']);
      window.scrollTo(0,0); 
    }


    private lagSkoleruteForValgteSkoler () {
      for (let skole of this.skoleRuterFraJsonFil){
        for (let valgtSkole of this.brukerensValgteSkoler){
          if(valgtSkole === skole.skole){
            this.valgteSkoleRuter.push(skole);
            }
          }
        }
    }
    
    private visSkoleruteKnapp() {
      this.visKnapper = true;
    }

    private skjulSkoleruteKnapp() {
      this.visKnapper = false;
    }

    private nullstillVariabler() {
      for(let skole of this.skoler){
        if(skole.TrykketPa === true){
          skole.TrykketPa = false;
        }
      }
      this.skolenavn = '';
      this.brukerensValgteSkoler = [];
      this.valgteSkoleRuter = [];
      this.visKnapper = false;
    }
  }
