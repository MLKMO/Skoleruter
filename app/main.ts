import {SkoleDataService} from './velgSkole/skole-data.service';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';
import { ValgteSkolerService } from './valgte-skoler.service';

platformBrowserDynamic().bootstrapModule(AppModule, [ ValgteSkolerService, SkoleDataService]); // ValgteSkolerService blir lagt til slik at data kan bli sendt til andre komponenter i appen
