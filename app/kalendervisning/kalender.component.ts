import { Component } from '@angular/core';

@Component({
    selector: 'kalender',
    templateUrl: 'app/kalendervisning/html/kalender.html'
})
export class KalenderComponent {

    antallRuter: number = 0;

    forsteImnd: string[] = ["2017-01-01' | date:'E'", "2017-02-01' | date:'E'", 
        "2017-03-01' | date:'E'", "2017-04-01' | date:'E'", "2017-05-01' | date:'E'", 
        "2017-06-01' | date:'E'", "2017-07-01' | date:'E'", "2016-08-01' | date:'E'", 
        "2016-09-01' | date:'E'", "2016-10-01' | date:'E'", "2016-11-01' | date:'E'", 
        "2016-12-01' | date:'E'"];
        

    // Algoritme for å finne sette antall dager pr mnd, samt sjekke skuddår
    antallDager(mnd :number, aar :number) :number {
        var dager :number;

        if ((mnd == 4) || (mnd == 6) || (mnd == 9) || (mnd == 11)) {
            dager = 30;
        } else {
            dager = 31
            if (mnd == 2) {
                if (aar / 4 != 0) {
                    dager = 28
                } else {
                    if (aar / 100 != 0) {
                        dager = 29
                    } else {
                        if (aar / 400 != 0) {
                            dager = 28
                        } else {
                            dager = 29
                        }
                    }
                }
            }
        }
        return dager;
            }


    // Returnerer kalender på tabellform
    kalenderen(tomme :string, mnd: number, aar: number) :string {
        var kalender :string ='';

        kalender += '<table width="100%" height="100%" align="center" cellpadding=2> <tr> <th> Man <th> Tir <th> Ons <th> Tor <th> Fre <th> Lør <th> Søn </tr>';
        if (tomme != '') {
            kalender += '<tr>';
            kalender += tomme;
            kalender += '</tr>'
        }
            
/*        for (var j = 1; j <= this.antallDager(mnd, aar); j++) {
            if (this.antallRuter % 7 == 0) {
                kalender += ('<tr>');
            }
            kalender += ('<td>' + j + '</td>');
            this.antallRuter++;
        }*/

// Til presentasjon av prosjekt
        for (var j = 1; j <= this.antallDager(mnd, aar) - 3; j++) {
            if (this.antallRuter % 7 == 0) {
                kalender += ('<tr>');
            }
            kalender += ('<td>' + j + '</td>');
            this.antallRuter++;
        }
        kalender += '<td style="background-color:black;"> 29 </td>';

        kalender += '</tr> </table>';
        this.antallRuter = 0;
        return kalender;
    }


    forsteUkedag(dato :string) :string {
        var tomme :string;
        if (dato == 'Mon') {
            tomme = '';
        } else if (dato == 'Tue') {
            tomme = '<td></td>';
            this.antallRuter += 1;
        } else if (dato == 'Wed') {
            tomme = '<td></td><td></td>';
            this.antallRuter += 2;
        } else if (dato == 'Thu') {
            tomme = '<td></td><td></td><td></td>';
            this.antallRuter += 3;
        } else if (dato == 'Fri') {
            tomme = '<td></td><td></td><td></td><td></td>';
            this.antallRuter += 4;
        } else if (dato == 'Sat') {
            tomme = '<td></td><td></td><td></td><td></td><td></td>';
            this.antallRuter += 5;
        } else {
            tomme = '<td></td><td></td><td></td><td></td><td></td><td></td>';
            this.antallRuter += 6;
        }
        return tomme;
    }

}