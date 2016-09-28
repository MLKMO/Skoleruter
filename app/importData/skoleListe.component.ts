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
  skoler: Skole[];            //Skole objekter som bruke kan velge
  skolenavn: string="";       //String som blir hentet fra søkefelt
  mineSkoler: Array<string>;  //Valgte skoler

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
        this.valgteSkolerService.leggTilSkole(skole.Skolenavn);
        this.valgteSkoler();

        //Fungerer ikke
        this.fjernValgtSkoleFraListe(skole);
    }

    private valgteSkoler(){
      this.mineSkoler = this.valgteSkolerService.mineSkoler();
    }

    private fjernSkole(minskole:string){
      this.valgteSkolerService.fjernSkole(minskole);
      this.valgteSkoler();
    }

    //Fungerer ikke, må nok bruke en annen metode for å fjerne elementer fra en objekt array
    private fjernValgtSkoleFraListe(skole: Skole){
      console.log(skole.Skolenavn);
      var index = this.skoler.indexOf(skole);
      if (index > -1) {
          this.skoler.splice(index, 1);
      }
    }

  }
