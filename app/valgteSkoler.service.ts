import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Skole } from './velgSkole/skole';
import { SkoleRuteData } from './velgSkole/skoleRuteData';
@Injectable()

export class ValgteSkolerService
{
    private valgteSkoler: Array<string> = [];
    private valgteSkoleRuter: Array<any> = [];
    private skoler: Skole[];
    private skoleRute: SkoleRuteData[];
    private datoer: Array<any> =[];

    public leggTilSkole(skole: string, indeks: number): void {
        for(let skolen of this.valgteSkoler) {
          if(skolen === skole) {
            this.fjernSkole(skole);
            return;
          }
        }
        this.valgteSkoler.push(skole);
    }

    private fjernSkole(skole: string) {
      let indeks = this.valgteSkoler.indexOf(skole);
      if (indeks > -1) {
          this.valgteSkoler.splice(indeks, 1);
      }
    }

    public nullstillVariabler() {
      this.valgteSkoler = [];
      this.valgteSkoleRuter = [];
      this.skoler = null;
      this.skoleRute = null;
    }

    public setValgteSkoleRuter(valgteSkoleRuter: Array<any>) {
      this.valgteSkoleRuter = valgteSkoleRuter;
    }

    public getValgteSkoleRuter() {
      return this.valgteSkoleRuter;
    }

    public getValgteSkoler(): Array<string> {
        return this.valgteSkoler;
    }

    public setSkoler(skoler: Skole[]) {
      this.skoler = skoler;
    }

    public getSkoler() {
      return this.skoler;
    }

    public setSkoleRute(skoleRute: SkoleRuteData[]) {
      this.skoleRute = skoleRute;
    }

    public getSkoleRute() {
      return this.skoleRute;
    }

    public getDatoer(): Array<any>  {
		  return this.datoer;
	  }

	  public setDatoer(value: Array<any> ) {
		  this.datoer = value;
	  }

    public setLagreDataLokalt() {
      //localStorage.setItem("datoer", JSON.stringify(this.datoer));
      localStorage.setItem("valgteSkoleRuter", JSON.stringify(this.valgteSkoleRuter));
      localStorage.setItem("skoler", JSON.stringify(this.skoler));
      localStorage.setItem("skoleRute", JSON.stringify(this.skoleRute));
      localStorage.setItem("valgteSkoler", JSON.stringify(this.valgteSkoler));
    }

    public getLagretData() {
      let hentvalgteSkoleRuter = localStorage.getItem("valgteSkoleRuter");
      this.valgteSkoleRuter = JSON.parse(hentvalgteSkoleRuter);

      let hentdatoer = localStorage.getItem("datoer");
      this.datoer = JSON.parse(hentdatoer);

      let hentskoler = localStorage.getItem("skoler");
      this.skoler = JSON.parse(hentskoler);
      

      let hentskoleRute = localStorage.getItem("skoleRute");
      this.skoleRute = JSON.parse(hentskoleRute);

      let hentvalgteSkoler = localStorage.getItem("valgteSkoler");
      this.valgteSkoler = JSON.parse(hentvalgteSkoler);
      if(this.valgteSkoler === null){ // Den kan ikke være null fordi da vil vi ikke kunne bruke push til å legge til skoler.
        this.valgteSkoler = [];
      }
    }

    public lagreDatoerLokalt(datoer: Array<any>){
      this.datoer=datoer;
       localStorage.setItem("datoer", JSON.stringify(this.datoer));
    }

    public fjernLagretData() {
      localStorage.removeItem("valgteSkoleRuter");
      localStorage.removeItem("skoler");
      localStorage.removeItem("skoleRute");
      localStorage.removeItem("valgteSkoler");
    }

}
