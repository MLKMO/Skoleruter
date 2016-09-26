import { Component, OnInit } from '@angular/core';
import { Skole }              from './skole';
import { SkoleDataService }       from './skoledata.service';
import { SkoleListeFilterPipe} from'./skoleListeFilter.pipe';
import { Pipe, PipeTransform} from '@angular/core';

import { ValgteSkolerService } from '../valgte-skoler.service';


@Component({
  selector: 'skoleListe',
  templateUrl: 'app/importData/skoleListe.component.html',
  providers: [ SkoleDataService, ValgteSkolerService ],

})
export class SkoleListeComponent implements OnInit {
  errorMessage: string;
  skoler: Skole[];
  skolenavn: string="";

  mineSkoler: Array<string>;

  constructor (private skoledataService: SkoleDataService,
      private valgteSkolerService: ValgteSkolerService) {}

  ngOnInit() { this.getskoler(); }

  getskoler() {
    this.skoledataService.getskoler()
                     .subscribe(
                       skoler => this.skoler = skoler ,
                       error =>  this.errorMessage = <any>error);
    }
    private leggTilSkole(skole: Skole)
    {
        this.valgteSkolerService.leggTilSkole(skole.Skolenavn);
        this.valgteskoler();
    }
    // For debugging
    private valgteskoler()
    {
      this.mineSkoler = this.valgteSkolerService.mineSkoler();
      console.log(this.mineSkoler)
    }
    private fjernSkole(minskole:string):void
    {
      this.valgteSkolerService.fjernSkole(minskole);
      this.mineSkoler=this.valgteSkolerService.mineSkoler()
    }

  }
