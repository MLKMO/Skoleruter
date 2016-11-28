import { VarslingService } from './../../app/varsling/varsling.service';
import { ValgteSkolerService } from './../../app/valgte-skoler.service';

describe('VarslingService', () => {
    let varslingservice: VarslingService;

    beforeEach(() => 
    { 
        varslingservice = new VarslingService(new ValgteSkolerService); 
    });
   
    it('Skal lage en topic liste, lag_topic_liste(valgteSkoler: Array<any>)', () => 
    {
        let valgteSkoler: Array<any> = 
        ["Hafrsfjord skole","Jåtta skole", "Austbø skole"
        ];
        let topicsListe:Array<any>=
        ["Hafrsfjordskole","Jaattaskole", "Austbooskole"
        ];
        expect(varslingservice.lag_topic_liste(valgteSkoler)).toEqual(topicsListe);
    });

    it('Skal fjerne mellomrom på navn, fjern_mellomrom(skolenavn:string)', () => 
    {
        let valgteSkoler: string = "Jåtta skole";
        let utenMellomrom: string = "Jåttaskole";
        expect(varslingservice.fjern_mellomrom(valgteSkoler)).toEqual(utenMellomrom);
    });

    it('Skal fjerne ø og Ø på navn, fjern_norske_tegn(skolenavn:string)', () => 
    {
        let valgteSkoler: string = "Jøtta skØle";
        let utenNorskeTegn: string = "Jootta skOOle";
        expect(varslingservice.fjern_norske_tegn(utenNorskeTegn)).toEqual(utenNorskeTegn);
    });
    
    it('Skal fjerne å og Å på navn, fjern_norske_tegn(skolenavn:string)', () => 
    {
        let valgteSkoler: string = "Jåtta skÅle";
        let utenNorskeTegn: string = "Jaatta skAAle";
        expect(varslingservice.fjern_norske_tegn(utenNorskeTegn)).toEqual(utenNorskeTegn);
    });

    it('Skal fjerne æ og Æ på navn, fjern_norske_tegn(skolenavn:string)', () => 
    {
        let valgteSkoler: string = "Jætta skÆle";
        let utenNorskeTegn: string = "Jaetta skAEle";
        expect(varslingservice.fjern_norske_tegn(utenNorskeTegn)).toEqual(utenNorskeTegn);
    });
});