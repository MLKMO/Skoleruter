import { Component } from '@angular/core';
import {SkoleListeComponent} from './velgSkole/skoleListe.component';
import './velgSkole/rxjs-operators';

@Component({
    selector: 'my-app',
    template: `
               <skoleListe></skoleListe>`
})
export class AppComponent { }
