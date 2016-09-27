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
    }

    private valgteSkoler(){
      this.mineSkoler = this.valgteSkolerService.mineSkoler();
    }

    private fjernSkole(minskole:string){
      this.valgteSkolerService.fjernSkole(minskole);
      this.valgteSkoler();
    }

  }
