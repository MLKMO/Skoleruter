import { NesteFridagService } from './../../app/nestefridag/neste-fridag.service';
import { ValgteSkolerService } from './../../app/valgteSkoler.service';

describe('NesteFridagService', () => {
    let nesteFridagService: NesteFridagService;

    beforeEach(() => 
    { 
        nesteFridagService = new NesteFridagService(new ValgteSkolerService); 
    });
    it('Skal vise dagens dato, hentDagensDato()', () =>
    {
        let dagensDato: string = new Date().toISOString().slice(0, 10);

        nesteFridagService.setDagensDato();
        expect(nesteFridagService.hentDagensDato()).toBe(dagensDato);
    });

    it('Skal legge til neste fridag i array, finnNesteFridag()', () => 
    {
        let valgteSkoleruter: Array<any> = 
        [
            {
                dato:"2016-08-01",
                elevdag:"Nei",
                kommentar:"Første dag - SFO",
                laererdag:"Nei",
                sfodag:"Ja",
                skole:"Buøy skole"
            },
            {
                dato:"2016-09-01",
                elevdag:"Nei",
                kommentar:"Første dag - SFO",
                laererdag:"Nei",
                sfodag:"Ja",
                skole:"Buøy skole"
            }
        ];

        nesteFridagService.dagensAar = 2016;
        nesteFridagService.dagensMaaned = 1;
        nesteFridagService.dagensDag = 1;

        expect(nesteFridagService.finnNesteFridag(valgteSkoleruter).length).toBe(1);
    });

    it('Skal tømme nesteFridag array, tomNesteFridagListe()', () =>
    {
        nesteFridagService.nesteFridag[0] = 'Ett element'
        nesteFridagService.tomNesteFridagListe();
        expect(nesteFridagService.nesteFridag.length).toBe(0);
    });
    });