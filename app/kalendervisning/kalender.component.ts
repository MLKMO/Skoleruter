import {SkoleDataService} from '../velgSkole/skole-data.service';
import {Component} from '@angular/core';
import { ValgteSkolerService } from '../valgte-skoler.service';
import {SkoleRuteData} from '../velgSkole/skole-rute-data.type';

@Component({
    selector: 'kalender',
    templateUrl: 'app/kalendervisning/html/kalender.html'
})
export class KalenderComponent {

    constructor(private valgteSkolerService: ValgteSkolerService,
    private skoledataService: SkoleDataService) {}
    private valgteSkoleRuter: Array<any> = []; 
    public datoer: Array<Cell> = [];
    private errorMessage: string;
    private dato: Date = new Date();
    private maaned: number = this.dato.getMonth() + 1;
    private maanedStr: string = this.dato.getFullYear() + '-' 
        + this.dato.getMonth() + '-' + this.dato.getDate();
    private aaret:number = 2016;
    private maanedNavn: Array <string> = [
        'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September','Oktober', 'November', 'Desember'
        ];
    antallRuter: number = 0;
    j: number = 0;

    ngOnInit() {
        this.valgteSkolerService.getLagretData();
        this.datoer = this.valgteSkolerService.getDatoer();
        this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
    }

    // Algoritme for å finne antall dager pr mnd, inkl. sjekke skuddår
    antallDager(mnd :number, aar :number) :number {
        var dager :number;
        if ((mnd == 4) || (mnd == 6) || (mnd == 9) || (mnd == 11)) {
            dager = 30;
        } else {
            dager = 31
            if (mnd == 2) {
                if (aar % 4 != 0) {
                    dager = 28    
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

    settDatoId(cell:Cell) {
        switch (true) {
                case this.maaned == 8 :
                    cell.id = this.datoer[this.j].dato;
                    break;
                case this.maaned == 9 :
                    cell.id = this.datoer[this.j + 31].dato;
                    break;
                case this.maaned == 10 :
                    cell.id = this.datoer[this.j + 31 + 30].dato;
                    break;
                case this.maaned == 11 :
                    cell.id = this.datoer[this.j + 31 + 30 + 31].dato;
                    break;
                case this.maaned == 12 :
                    cell.id = this.datoer[this.j + 31 + 30 + 31 + 30].dato;
                    break;
                case this.maaned == 1 :
                    cell.id = this.datoer[this.j + 31 + 30 + 31 + 30 + 31].dato;
                    break;
                case this.maaned == 2 :
                    cell.id = this.datoer[this.j + 31 + 30 + 31 + 30 + 31 + 31].dato;
                    break;
                case this.maaned == 3 :
                    cell.id = this.datoer[this.j + 31 + 30 + 31 + 30 + 31 + 31 + 28].dato;
                    break;
                case this.maaned == 4 :
                    cell.id = this.datoer[this.j + 31 + 30 + 31 + 30 + 31 + 31 + 28 + 31].dato;
                    break;
                case this.maaned == 5 :
                    cell.id = this.datoer[this.j + 31 + 30 + 31 + 30 + 31 + 31 + 28 + 31 + 30].dato;
                    break;
                case this.maaned == 6 :
                    cell.id = this.datoer[this.j + 31 + 30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31].dato;
                    break;
                case this.maaned == 7 :
                    cell.id = this.datoer[this.j + 31 + 30 + 31 + 30 + 31 + 31 + 28 + 31 + 30 + 31 + 30].dato;
                    break;
            }
            return cell.id;
    }

    ukeEn() :Array<Cell> {
        var cells: Array<Cell> = [];
        this.antallRuter = 0;
        for (let i = 0; i < this.forsteImnd()[this.maaned]; i++) {
            var cell = new Cell;
            cells.push(cell);
            this.antallRuter++;
        }
        for (this.j = 0; this.j < this.antallDager(this.maaned, this.aaret); this.j++) {
            let cell = new Cell();
            cell.id = this.settDatoId(cell);
            cell.text = this.j + 1;       
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
        for (this.j += 1 ; this.j < this.antallDager(this.maaned, this.aaret); this.j++) {
            var cell = new Cell;
            cell.id = this.settDatoId(cell);
            cell.text = this.j + 1;       
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
        var aug: number = 0;
        var sep: number = 3;
        var okt: number = 5;
        var nov: number = 1;
        var des: number = 3;
        var jan: number = 6;
        var feb: number = 2;
        var mar: number = 2;
        var apr: number = 5;
        var mai: number = 0;
        var jun: number = 3;
        var jul: number = 5;
        var mnd: number[] = [null, jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des];
        return mnd;
    }

    plussMnd() {
        if (this.maaned === 12) {
            this.maaned = 1;
            this.aaret++;
        } else if (this.maaned === 7) {
            this.maaned = 7;
        } else {
            this.maaned++;
        }
    }

    minusMnd(){
        if (this.maaned === 1) {
            this.maaned = 12;
            this.aaret--;
        } else if (this.maaned === 8) {
            this.maaned = 8;
        } else {
            this.maaned--;
        }
    }

    datoerContains(cell:any):any {
        let fulltSkolenavn:any[] = [];
        let kortSkolenavn:any[] = [];
        let sfoFri:any = false;
        for (let i = 0; i < this.valgteSkoleRuter.length; i++) {
            if (this.valgteSkoleRuter[i].dato == cell.id) {
                fulltSkolenavn.push(this.valgteSkoleRuter[i]);
                let kort:any[] = this.valgteSkoleRuter[i].skole.substring(0, 3).toUpperCase();
                kortSkolenavn.push(kort);
                sfoFri = 'red';
                if (this.valgteSkoleRuter[i].sfodag == 'Nei') {
                    sfoFri = true;
                }
            }
        }
        return {
            fulltSkolenavn: fulltSkolenavn,
            kortSkolenavn:  kortSkolenavn,
            sfoFri:         sfoFri,
        }
    }

    forLoop() {
        let i:any[] = [1, 2, 3, 4, 5];
        return i;
    }


    sjekkPiltast(event: any) {
        event = event || window.event;
        switch (event.which || event.keyCode) {
            case 37:
                this.minusMnd();
                break;
            case 39:
                this.plussMnd();
                break;
        }
    }


	// Touch events
    fingerCount = 0;
	startX = 0;
	startY = 0;
	curX = 0;
	curY = 0;
	deltaX = 0;
	deltaY = 0;
	horzDiff = 0;
	vertDiff = 0;
	minLength = 72; // the shortest distance the user may swipe
	swipeLength = 0;
	swipeAngle: any = null;
	swipeDirection: any = null;
	
	touchStart(event: any) {
		// get the total number of fingers touching the screen
		this.fingerCount = event.touches.length;
		// since we're looking for a swipe (single finger) and not a gesture (multiple fingers),
		// check that only one finger was used
		if ( this.fingerCount == 1 ) {
			// get the coordinates of the touch
			this.startX = event.touches[0].pageX;
			this.startY = event.touches[0].pageY;
		} else {
			// more than one finger touched so cancel
			this.touchCancel(event);
		}
	}

	touchMove(event: any) {
		if ( event.touches.length == 1 ) {
			this.curX = event.touches[0].pageX;
			this.curY = event.touches[0].pageY;
		} else {
			this.touchCancel(event);
		}
	}
	
	touchEnd(event: any) {
		// check to see if more than one finger was used and that there is an ending coordinate
		if ( this.fingerCount == 1 && this.curX != 0 ) {
			// use the Distance Formula to determine the length of the swipe
			this.swipeLength = Math.round(Math.sqrt(Math.pow(this.curX - this.startX,2) + Math.pow(this.curY - this.startY,2)));
			// if the user swiped more than the minimum length, perform the appropriate action
			if ( this.swipeLength >= this.minLength ) {
				this.caluculateAngle();
				this.determineSwipeDirection();
				this.processingRoutine();
				this.touchCancel(event); // reset the variables
			} else {
				this.touchCancel(event);
			}	
		} else {
			this.touchCancel(event);
		}
	}

	touchCancel(event: any) {
		// reset the variables back to default values
		this.fingerCount = 0;
		this.startX = 0;
		this.startY = 0;
		this.curX = 0;
		this.curY = 0;
		this.deltaX = 0;
		this.deltaY = 0;
		this.horzDiff = 0;
		this.vertDiff = 0;
		this.swipeLength = 0;
		this.swipeAngle = null;
		this.swipeDirection = null;
	}
	
	caluculateAngle() {
		var X = this.startX-this.curX;
		var Y = this.curY-this.startY;
		var Z = Math.round(Math.sqrt(Math.pow(X,2)+Math.pow(Y,2))); //the distance - rounded - in pixels
		var r = Math.atan2(Y,X); //angle in radians (Cartesian system)
		this.swipeAngle = Math.round(r*180/Math.PI); //angle in degrees
		if ( this.swipeAngle < 0 ) { this.swipeAngle =  360 - Math.abs(this.swipeAngle); }
	}
	
	determineSwipeDirection() {
		if ( (this.swipeAngle <= 45) && (this.swipeAngle >= 0) ) {
			this.swipeDirection = 'left';
		} else if ( (this.swipeAngle <= 360) && (this.swipeAngle >= 315) ) {
			this.swipeDirection = 'left';
		} else if ( (this.swipeAngle >= 135) && (this.swipeAngle <= 225) ) {
			this.swipeDirection = 'right';
		}
	}
	
	processingRoutine() {
		if ( this.swipeDirection == 'left' ) {
            this.plussMnd();
		} else if ( this.swipeDirection == 'right' ) {
            this.minusMnd();
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
            /*for (let rute of this.valgtevalgteSkoleRuterr) {
                if (rute.dato == document.getElementsByTagName("TD")[0].getAttribute("data-kalender")) {
                    kalender += ('<td data-kalender="2016-08-01">' + j + rute.dato + '</td>');
                } else {
                    kalender += ('<td data-kalender="2016-08-01">' + j + '</td>');
                }
            }
            for (let rute of this.valgtevalgteSkoleRuterr) {
                    kalender += ('<td data-kalender="2016-08-01">' + j + rute.dato + '</td>');
            }
            kalender += ('<td data-kalender="2016-08-01">' + j + '</td>');
            this.antallRuter++;
        }
        kalender += '</tr> </table>';
        this.antallRuter = 0;
        return kalender;
    }*/

        /*forsteUkedag(dato :string) :string {
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
    }*/