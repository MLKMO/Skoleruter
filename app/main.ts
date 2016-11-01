import {SkoleDataService} from './velgSkole/skoleData.service';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';
import { ValgteSkolerService } from './valgteSkoler.service';

platformBrowserDynamic().bootstrapModule(AppModule, [ ValgteSkolerService, SkoleDataService]); // ValgteSkolerService blir lagt til slik at data kan bli sendt til andre komponenter i appen
