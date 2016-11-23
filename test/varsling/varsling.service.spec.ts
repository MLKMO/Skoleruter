import { VarslingService } from './../../app/varsling/varsling.service';
import { ValgteSkolerService } from './../../app/valgteSkoler.service';

describe('NesteFridagService', () => {
    let varslingservice: VarslingService;

    beforeEach(() => 
    { 
        varslingservice = new VarslingService(new ValgteSkolerService); 
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
        ["Hafrsfjord skole", ""
        ];

        

        expect(nesteFridagService.finnNesteFridag(valgteSkoleruter).length).toBe(1);
    });

    it('Skal tømme nesteFridag array, tomNesteFridagListe()', () =>
    {
        nesteFridagService.nesteFridag[0] = 'Ett element'
        nesteFridagService.tomNesteFridagListe();
        expect(nesteFridagService.nesteFridag.length).toBe(0);
    });
    });