import {SkoleDataService} from '../velgSkole/skoleData.service';
import {Component} from '@angular/core';
import { ValgteSkolerService } from '../valgteSkoler.service';
import {SkoleRuteData} from '../velgSkole/skoleRuteData';
import { DatoService } from './datoer.service';

@Component({
    selector: 'kalender',
    providers: [DatoService],
    templateUrl: 'app/kalendervisning/html/kalender.html'
})
export class KalenderComponent {
    constructor(private valgteSkolerService: ValgteSkolerService, private DatoService: DatoService,
    private skoledataService: SkoleDataService) {}

    private skoleRute: Array<SkoleRuteData>; 
    public datoer: Array<Cell> = [];
    private errorMessage: string;
    private maaned: number=8;
    private aaret:number=2016;
    private maanedNavn: Array <string> = [
        'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September','Oktober', 'November', 'Desember'
    ];

    ngOnInit() {
        this.valgteSkolerService.getLagretData();
        console.log(this.valgteSkolerService.getDatoer());
        this.datoer=this.valgteSkolerService.getDatoer();
        this.skoleRute = this.valgteSkolerService.getSkoleRute();
    }

    antallRuter: number = 0;
    j: number = 0;

    // Algoritme for å finne sette antall dager pr mnd, samt sjekke skuddår
    antallDager(mnd :number, aar :number) :number {
        var dager :number;
        if ((mnd == 4) || (mnd == 6) || (mnd == 9) || (mnd == 11)) {
            dager = 30;
        } else {
            dager = 31
            if (mnd == 2) {
                if (aar % 4 != 0) {
                    dager = 28
                    console.log("Hei");
                    
                } else {
                    if (aar % 100 != 0) {
                        dager = 29
                    } else {
                        if (aar % 400 != 0) {
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

    ukeEn() :Array<Cell> {

        let cells: Array<Cell> = [];
        this.antallRuter = 0;
        for (this.j = 0; this.j < this.antallDager(this.maaned, this.aaret); this.j++) {
            let cell = new Cell();
            cell.id = this.datoer[this.j].dato;
            cell.text = this.j+1;       
            cells.push(cell);
            this.antallRuter++;
            this.j = this.j;
            if (this.antallRuter % 7 == 0 && this.antallRuter != 0) {
                break;
            }
        }
        return cells;
    }
   
  ukeneEtter() :Cell[] {
        var cells: Array<Cell> = [];
        for (this.j+=1 ; this.j < this.antallDager(this.maaned, this.aaret); this.j++) {
            var cell = new Cell;
            cell.id = this.datoer[this.j].dato;
            cell.text = this.j+1;       
            cells.push(cell);
            this.antallRuter++;
            this.j = this.j;
            if (this.antallRuter % 7 == 0 && this.antallRuter != 0) {
                break;
            }
        }
       
        return cells;
    }

    forsteImnd() :number[] {
        var aug: number = 3;
        var sep: number = 0;
        var okt: number = 0;
        var nov: number = 0;
        var des: number = 0;
        var jan: number = 0;
        var feb: number = 0;
        var mar: number = 0;
        var apr: number = 0;
        var mai: number = 0;
        var jun: number = 0;
        var jul: number = 0;
        var mnd: number[] = [aug, sep, okt, nov, des, jan, feb, mar, apr, mai, jun, jul];
        return mnd;
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

    plussMnd(){
        if(this.maaned === 12){
            this.maaned=1;
            this.aaret++;
        }else{
            this.maaned++;
        }

        
    }
    minusMnd(){
        if(this.maaned===1){
            this.maaned=12;
            this.aaret--;
        }else{
            this.maaned--;
        }
    }
}

export class Cell {
    id: string;
    text: number;
    dato: string;
}













    // Returnerer kalender på tabellform
    /*kalenderen(tomme :string, mnd: number, aar: number) :string {
        var kalender :string ='';

        kalender += '<table> <tr> <th> Man <th> Tir <th> Ons <th> Tor <th> Fre <th> Lør <th> Søn </tr>';
        if (tomme != '') {
            kalender += '<tr>';
            kalender += tomme;
            kalender += '</tr>'
        }
            
        for (var j = 1; j <= this.antallDager(mnd, aar); j++) {
            if (this.antallRuter % 7 == 0) {
                kalender += ('<tr>');
            }
            /*for (let rute of this.valgteSkoleRuter) {
                if (rute.dato == document.getElementsByTagName("TD")[0].getAttribute("data-kalender")) {
                    kalender += ('<td data-kalender="2016-08-01">' + j + rute.dato + '</td>');
                } else {
                    kalender += ('<td data-kalender="2016-08-01">' + j + '</td>');
                }
            }
            for (let rute of this.valgteSkoleRuter) {
                    kalender += ('<td data-kalender="2016-08-01">' + j + rute.dato + '</td>');
            }
            kalender += ('<td data-kalender="2016-08-01">' + j + '</td>');
            this.antallRuter++;
        }
        kalender += '</tr> </table>';
        this.antallRuter = 0;
        return kalender;
    }*/