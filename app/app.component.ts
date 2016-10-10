import { Component } from '@angular/core';
<<<<<<< HEAD
import { KalenderComponent } from './kalendervisning/kalender.component';

@Component({
    selector: 'my-app',
    template: `<kalender></kalender>`
=======
import {SkoleListeComponent} from './velgSkole/skoleListe.component';
import './velgSkole/rxjs-operators';
import { ValgteSkolerService } from './valgteSkoler.service';

@Component({
    selector: 'my-app',
    templateUrl:'app/html/app.component.html' ,
    providers: [ValgteSkolerService]
>>>>>>> master
})
export class AppComponent { }

