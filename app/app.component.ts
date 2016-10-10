import { Component } from '@angular/core';

import {SkoleListeComponent} from './velgSkole/skoleListe.component';
import './velgSkole/rxjs-operators';
import { ValgteSkolerService } from './valgteSkoler.service';

@Component({
    selector: 'my-app',
    templateUrl:'app/html/app.component.html' ,
    providers: [ValgteSkolerService]

})
export class AppComponent { }

