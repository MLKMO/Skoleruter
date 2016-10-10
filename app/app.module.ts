import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { listeComponent } from './listevisning/liste.component';
import { listeService } from './listevisning/liste.service';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,
                  listeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
