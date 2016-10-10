import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KalenderComponent } from './kalendervisning/kalender.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,
  KalenderComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
