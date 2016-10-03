import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

//Egenproduserte components
import { AppComponent }  from './app.component';
import {SkoleListeComponent} from './velgSkole/skoleListe.component';
import { SkoleListeFilterPipe} from'./velgSkole/skoleListeFilter.pipe';

import { SkoleDataService } from './velgSkole/skoleData.service';
import { ValgteSkolerService } from './valgteSkoler.service';


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
