import {Component} from '@angular/core';
import { ValgteSkolerService } from '../valgte-skoler.service';

@Component({
    selector: 'kalender',
    templateUrl: 'app/kalendervisning/html/kalender.html'
})
export class KalenderComponent {

    constructor(private valgteSkolerService: ValgteSkolerService) {}

    private valgteSkoleRuter:    Array<any> = []; 
    public  datoer:              Array<Cell> = [];
    private errorMessage:        string;
    private dato:                Date = new Date();
    private maaned:              number = this.dato.getMonth() + 1;
    private maanedStr:           string = this.dato.getFullYear() + '-' + this.dato.getMonth() + '-' + this.dato.getDate();
    private aaret:               number = 2016;
    private maanedNavn:          Array <string> = ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September','Oktober', 'November', 'Desember'];
    private antallRuter:         number = 0;
    private j:                   number = 0;
    private fingerCount:         number = 0;
	private startX:              number = 0;
	private startY:              number = 0;
	private curX:                number = 0;
	private curY:                number = 0;
	private deltaX:              number = 0;
	private deltaY:              number = 0;
	private horzDiff:            number = 0;
	private vertDiff:            number = 0;
	private minLength:           number = 72;
	private swipeLength:         number = 0;
	private swipeAngle:          any = null;
	private swipeDirection:      any = null;


    ngOnInit() {
        this.valgteSkolerService.getLagretData();
        this.datoer = this.valgteSkolerService.getDatoer();
        this.valgteSkoleRuter = this.valgteSkolerService.getValgteSkoleRuter();
    }


    datoerInnhold(cell:any):any {
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


    ukeEn() :Array<Cell> {
        var cells: Array<Cell> = [];
        this.antallRuter = 0;
        for (let i = 0; i < this.forsteImnd()[this.maaned]; i++) {
            var cell = new Cell;
            cells.push(cell);
            this.antallRuter++;
        }
        for (this.j = 0; this.j < this.dagerIMnd(this.maaned, this.aaret); this.j++) {
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
        for (this.j += 1 ; this.j < this.dagerIMnd(this.maaned, this.aaret); this.j++) {
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


    // hvilken dag den 1. i mnd kommer, mandag = 0, tirsdag = 1 etc.
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


    dagerIMnd(mnd :number, aar :number) :number {
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
                    cell.id = this.datoer[this.j + 61].dato;
                    break;
                case this.maaned == 11 :
                    cell.id = this.datoer[this.j + 92].dato;
                    break;
                case this.maaned == 12 :
                    cell.id = this.datoer[this.j + 122].dato;
                    break;
                case this.maaned == 1 :
                    cell.id = this.datoer[this.j + 153].dato;
                    break;
                case this.maaned == 2 :
                    cell.id = this.datoer[this.j + 184].dato;
                    break;
                case this.maaned == 3 :
                    cell.id = this.datoer[this.j + 212].dato;
                    break;
                case this.maaned == 4 :
                    cell.id = this.datoer[this.j + 243].dato;
                    break;
                case this.maaned == 5 :
                    cell.id = this.datoer[this.j + 273].dato;
                    break;
                case this.maaned == 6 :
                    cell.id = this.datoer[this.j + 304].dato;
                    break;
                case this.maaned == 7 :
                    cell.id = this.datoer[this.j + 334].dato;
                    break;
            }
            return cell.id;
    }


    forLoop() {
        let i:any[] = [1, 2, 3, 4, 5];
        return i;
    }


    nesteMnd() {
        if (this.maaned == 12) {
            this.maaned = 1;
            this.aaret++;
        } else if (this.maaned == 7) {
            this.maaned = 7;
        } else {
            this.maaned++;
        }
    }


    forrigeMnd(){
        if (this.maaned == 1) {
            this.maaned = 12;
            this.aaret--;
        } else if (this.maaned == 8) {
            this.maaned = 8;
        } else {
            this.maaned--;
        }
    }


    sjekkPiltast(event: any) {
        event = event || window.event;
        switch (event.which || event.keyCode) {
            case 37:
                this.forrigeMnd();
                break;
            case 39:
                this.nesteMnd();
                break;
        }
    }


	// Touch events
	
	touchStart(event: any) {
        
		this.fingerCount = event.touches.length;
		if ( this.fingerCount == 1 ) {
			this.startX = event.touches[0].pageX;
			this.startY = event.touches[0].pageY;
            console.log("start");
		} else {
			this.touchCancel(event);
		}
	}

	touchMove(event: any) {
		if ( event.touches.length == 1 ) {
			this.curX = event.touches[0].pageX;
			this.curY = event.touches[0].pageY;
            console.log("move");
		} else {
			this.touchCancel(event);
		}
	}
	
	touchEnd(event: any) {
		if ( this.fingerCount == 1 && this.curX != 0 ) {
			this.swipeLength = Math.round(Math.sqrt(Math.pow(this.curX - this.startX,2) + Math.pow(this.curY - this.startY,2)));
			if ( this.swipeLength >= this.minLength ) {
				this.caluculateAngle();
				this.determineSwipeDirection();
				this.processingRoutine();
				this.touchCancel(event);
                console.log("end");
			} else {
				this.touchCancel(event);
			}	
		} else {
			this.touchCancel(event);
		}
	}

	touchCancel(event: any) {
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
            this.nesteMnd();
		} else if ( this.swipeDirection == 'right' ) {
            this.forrigeMnd();
		} 
	}

}


export class Cell {
    id: string;
    text: number;
    dato: string;
}

