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
import { InfoComponent } from './routing/info.component';
import { PageNotFoundComponent} from './page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component'
import { SkoleListeFilterPipe} from'./velgSkole/skoleListeFilter.pipe';
import { SkoleDataService } from './velgSkole/skoleData.service';
import { ValgteSkolerService } from './valgteSkoler.service';

import { SkoleruteModule } from './routing/skoleruter.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing, SkoleruteModule, RouterModule, HttpModule, JsonpModule],
  declarations: 
  [ 
    AppComponent, 
    SkoleListeComponent, 
    SkoleruterComponent,
    InfoComponent,
    PageNotFoundComponent, 
    NavbarComponent, 
    SkoleListeFilterPipe
  ],
    providers: [ appRoutingProviders, SkoleDataService, ValgteSkolerService ],
    bootstrap: [ AppComponent ], 
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
