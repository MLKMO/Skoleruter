import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dato'
})

export class DatoPipe implements PipeTransform {
    private maaned: string;
    private aar: string;
    private dag: string;
    private nyDato: string;
    private maanedNavn: Array <string> = 
    [
        'januar', 'februar', 'mars', 'april', 'mai', 'juni',
        'juli', 'august', 'september', 'november', 'desember'
    ];

    transform(value: string): any 
    {
        this.aar = value.slice(0,4);
        this.maaned = value.slice(5,8);
        this.dag = value.slice(8,10);

        this.nyDato = (this.dag + '. ' + this.maanedNavn[parseInt(this.maaned)-1] + '  ' + this.aar + ': ');
        return this.nyDato;
    }
}