import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent }  from './app.component';
import { FinnSkolerComponent} from './routing/finn-skoler.component';
import { SkoleruterComponent } from './routing/skoleruter.component';
import { InfoComponent } from './routing/info.component';
import { PageNotFoundComponent} from './page-not-found.component';

import { SkoleruteModule } from './routing/skoleruter.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing, SkoleruteModule, RouterModule],
  declarations: 
  [ 
    AppComponent, 
    FinnSkolerComponent, 
    SkoleruterComponent,
    InfoComponent,
    PageNotFoundComponent, 
  ],
    providers: [ appRoutingProviders ],
    bootstrap: [ AppComponent ], 
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
