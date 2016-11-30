import { KortDatoPipe } from './../../app/kort-Dato.pipe';

describe('DatoPipe', () => 
{

    let datoPipe: KortDatoPipe;
    beforeEach(() => 
    {
        datoPipe = new KortDatoPipe();
    });

    it('Skal gi ut dato på følgende format: dd.Måndednavn.yyyy', () =>
    {
        let dato: any = "2016-08-15";
        expect(datoPipe.transform(dato,)).toEqual('15. aug  2016: ');
    });
});