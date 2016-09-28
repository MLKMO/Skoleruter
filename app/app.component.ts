import { Component } from '@angular/core';
import { listeComponent } from './listevisning/liste.component';
import { listeService } from './listevisning/liste.service';
@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App</h1>
              <liste></liste>`
})
export class AppComponent { }
