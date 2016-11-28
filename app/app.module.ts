import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpModule, JsonpModule }  from '@angular/http';

//Egenproduserte components
import { AppComponent }  from './app.component';

import { SkoleListeComponent} from './velgSkole/skoleListe.component';
import { SkoleruterComponent } from './routing/skoleruter.component';
import { PageNotFoundComponent} from './page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component'
import { SkoleListeFilterPipe} from'./velgSkole/skoleListeFilter.pipe';
import { SkoleDataService } from './velgSkole/skoleData.service';
import { ValgteSkolerService } from './valgteSkoler.service';
import { NesteFridagComponent } from './nestefridag/neste-fridag.component';
import { DatoPipe } from './nestefridag//dato.pipe';
import { KortDatoPipe } from './kortDato.pipe';
import { ListeComponent } from './listevisning/liste.component';
import { Liste1Component } from './listevisning/liste1.component';
import { Liste2Component } from './listevisning/liste2.component';
import { Liste3Component } from './listevisning/liste3.component';
import { Liste4Component } from './listevisning/liste4.component';
import { Liste5Component } from './listevisning/liste5.component';
import { SkoleruteModule } from './routing/skoleruter.module';
import { NesteFridagModule } from './nestefridag/neste-fridag.module';
import { ListeModule } from './listevisning/liste.module';
import { LeggIKalenderComponent } from './leggikalender/legg-i-kalender.component';
import { LeggIKalenderService } from './leggikalender/legg-i-kalender.service';
import { InfoModule } from './info/info.module';
import { VarslingKomponent } from './varsling/varsling.component';
import { VarslingModule } from './varsling/varsling.module';
import { VarslingService } from './varsling/varsling.service';

@NgModule({
  imports: 
  [ BrowserModule, 
  FormsModule, 
  routing, 
  SkoleruteModule, 
  RouterModule, 
  HttpModule, 
  JsonpModule, 
  NesteFridagModule, 
  ListeModule,
  InfoModule,
  VarslingModule
  ],
  declarations: 
  [ 
    AppComponent, 
    SkoleListeComponent, 
    SkoleruterComponent,
    PageNotFoundComponent, 
    NavbarComponent, 
    SkoleListeFilterPipe,
    NesteFridagComponent,
    DatoPipe,
    KortDatoPipe,
    LeggIKalenderComponent,
    ListeComponent, 
    Liste1Component, 
    Liste2Component, 
    Liste3Component, 
    Liste4Component, 
    Liste5Component,
    VarslingKomponent
  ],
    providers: [ appRoutingProviders, SkoleDataService, ValgteSkolerService, LeggIKalenderService, VarslingService ],
    bootstrap: [ AppComponent ], 
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})

export class AppModule { }
