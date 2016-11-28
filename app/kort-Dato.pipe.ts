import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'kortDato'
})

export class KortDatoPipe implements PipeTransform {
    private maaned: string;
    private aar: string;
    private dag: string;
    private nyDato: string;
    private maanedNavn: Array <string> =
    [
        'jan', 'feb', 'mar', 'apr', 'mai', 'jun',
        'jul', 'aug', 'sep','okt', 'nov', 'des'
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