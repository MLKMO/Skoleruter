import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }  from './app.component';
//import {FinnSkolerPipe} from './Velgskole/finn-skoler.pipe';
//import {SokefeltComponent} from './Velgskole/sokefelt.component';

import {SkoleListeComponent} from './importData/skoleListe.component';
import { SkoleListeFilterPipe} from'./importData/skoleListeFilter.pipe';

@NgModule({
  imports: [ BrowserModule,
              FormsModule,
              HttpModule,
              JsonpModule
            ],

  declarations: [ AppComponent,
                  SkoleListeComponent,
                  SkoleListeFilterPipe,
                  //FinnSkolerPipe,
                  //SokefeltComponent
   ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
