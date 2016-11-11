import { LeggIKalenderService } from './../../app/leggikalender/legg-i-kalender.service';

describe('LeggIKalenderService', () => {
    let leggIKalenderService: LeggIKalenderService;

    beforeEach(() => 
    { 
        leggIKalenderService = new LeggIKalenderService(); 
    });

    it('Skal lage iCalKropp', () =>
    {
        let dato: string = '20160810';
        let skole: string = 'Auglend skole';
        let kommentar: string = 'Planleggingsdag';

        let lagICalKropp = leggIKalenderService.LagICalKropp(dato,skole,kommentar)
        expect(lagICalKropp).toContain('20160810');
        expect(lagICalKropp).toContain('Auglend skole');
        expect(lagICalKropp).toContain('Planleggingsdag');
        expect(lagICalKropp).toContain('BEGIN:VEVENT');
        expect(lagICalKropp).toContain('END:VEVENT');
        expect(lagICalKropp).toContain('UID');
    });

    it('Skal lage iCalFil', () =>
    {
        let icalData: string = '';

        let iCalFil = leggIKalenderService.LagICalFil(icalData);
        expect(iCalFil).toContain('BEGIN:VCALENDAR');
        expect(iCalFil).toContain('PRODID:skoleruter.top/v1');
        expect(iCalFil).toContain('VERSION:2.0');
        expect(iCalFil).toContain('END:VCALENDAR');
    });

    it('Skal teste at variablene blir tømt', () =>
    {
        leggIKalenderService.icalFil = 'Dette skal fjernes';
        leggIKalenderService.icalKropp = 'Dette skal også fjernes';
        expect(leggIKalenderService.icalFil).toBe('Dette skal fjernes')
        expect(leggIKalenderService.icalKropp).toBe('Dette skal også fjernes')

        let tomAlleVariabler = leggIKalenderService.tomAlleVariabler();
        expect(leggIKalenderService.icalFil).toBe('');
        expect(leggIKalenderService.icalKropp).toBe('');
    });  
    });