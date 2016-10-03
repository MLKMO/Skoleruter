import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

//Egenproduserte components
import { AppComponent }  from './app.component';
import {SkoleListeComponent} from './importData/skoleListe.component';
import { SkoleListeFilterPipe} from'./importData/skoleListeFilter.pipe';

import { SkoleDataService } from './importData/skoledata.service';
import { ValgteSkolerService } from './valgte-skoler.service';


@NgModule({
  imports: [ BrowserModule,
              FormsModule,
              HttpModule,
              JsonpModule
            ],

  declarations: [ AppComponent,
                  SkoleListeComponent,
                  SkoleListeFilterPipe
                ],
  providers:[
              SkoleDataService,
              ValgteSkolerService
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
