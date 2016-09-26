import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FinnSkolerPipe} from './Velgskole/finn-skoler.pipe';
import {SokefeltComponent} from './Velgskole/sokefelt.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, FinnSkolerPipe, SokefeltComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
