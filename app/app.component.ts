import { Component } from '@angular/core';
import {SkoleListeComponent} from './importData/skoleListe.component';
import './importData/rxjs-operators';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App</h1>

    <skoleListe></skoleListe>`
})
export class AppComponent { }
