import { Component, OnInit } from '@angular/core';
import { Skole }              from './skole';
import { SkoleDataService }       from './skoledata.service';
import { SkoleListeFilterPipe} from'./skoleListeFilter.pipe';
import { Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'skoleListe',
  templateUrl: 'app/importData/skoleListe.component.html',
  providers: [ SkoleDataService ],

})
export class SkoleListeComponent implements OnInit {
  errorMessage: string;
  skoler: Skole[];
  skolenavn: string="";

  constructor (private skoledataService: SkoleDataService) {}

  ngOnInit() { this.getskoler(); }

  getskoler() {
    this.skoledataService.getskoler()
                     .subscribe(
                       skoler => this.skoler = skoler ,
                       error =>  this.errorMessage = <any>error);

    }

  }
