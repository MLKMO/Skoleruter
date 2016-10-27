import { DatoPipe } from './../../app/dato.pipe';

describe('DatoPipe', () => 
{

    let datoPipe: DatoPipe;
    beforeEach(() => 
    {
        datoPipe = new DatoPipe();
    });

    it('Skal gi ut dato på følgende format: dd.Måndednavn.yyyy', () =>
    {
        let dato: any = "2016-08-15";
        expect(datoPipe.transform(dato,)).toEqual('15. august  2016: ');
    });
});