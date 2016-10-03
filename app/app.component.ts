import { Component } from '@angular/core';
import {SkoleListeComponent} from './importData/skoleListe.component';
import './importData/rxjs-operators';

@Component({
    selector: 'my-app',
    template: `
               <skoleListe></skoleListe>`
})
export class AppComponent { }
