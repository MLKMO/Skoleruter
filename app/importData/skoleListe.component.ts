import { Component, OnInit } from '@angular/core';
import { Skole }              from './skole';
import { SkoleDataService }       from './skoledata.service';
import { SkoleListeFilterPipe} from'./skoleListeFilter.pipe';
import { ValgteSkolerService } from '../valgte-skoler.service';

@Component({
  selector: 'skoleListe',
  templateUrl: 'app/importData/skoleListe.component.html',
  providers: [ SkoleDataService, ValgteSkolerService ],

})

export class SkoleListeComponent implements OnInit {
  errorMessage: string;       //Feilmelding som kan oppstå ved henting av data fra file eller server
  skoler: Skole[];            //Skole objekter som bruker kan velge i mellom
  skolenavn: string="";       //String som blir hentet fra søkefelt
  mineSkoler: Array<string>;  //Valgte skoler
  skoleIndekser:Array<number>=[]; //Lagrer posisjon på utvalgte skoler slik at de kan bli lagt tilbake i listen. Rekkefølgen på indeksen blir lik rekkefølgen som skolene blir valgt.
  visSkole=true;

  constructor (private skoledataService: SkoleDataService,
      private valgteSkolerService: ValgteSkolerService) {}

  ngOnInit() { this.getskoler(); }

  getskoler() {
    this.skoledataService.getskoler()
                     .subscribe(
                       skoler => this.skoler = skoler ,
                       error =>  this.errorMessage = <any>error);
    }

    private leggTilSkole(skole: Skole){
      console.log(skole);
      this.valgteSkolerService.leggTilSkole(skole.Skolenavn, this.skoler.indexOf(skole));
      this.valgteSkoler();
      this.fjernValgtSkoleFraListe(skole);
    }

    private valgteSkoler(){
      this.mineSkoler = this.valgteSkolerService.mineSkoler();
      this.skoleIndekser=this.valgteSkolerService.skoleIndeksListe();
    }

    private fjernSkole(minskole:string){
      var indeksTilFjernetSkole=this.valgteSkolerService.fjernSkole(minskole);  //Får indeksen til skolen som blir fjernet fra valgt skole i retur slik at vi kan legge tilbake navnet på riktig plass i skoler: Skole[]; arrayen.
      this.skoler[indeksTilFjernetSkole].Skolenavn=minskole;
      this.valgteSkoler();
    }

    private fjernValgtSkoleFraListe(skole: Skole){  //
      var index = this.skoler.indexOf(skole);
      console.log(this.skoler[index].Skolenavn);
      this.skoler[index].Skolenavn="";
      this.visSkole=false;
    }

  }
