import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Skole } from './velgSkole/skole';
import { SkoleRuteData } from './velgSkole/skoleRuteData';
@Injectable()

export class ValgteSkolerService
{
    public valgteSkoler: Array<string> = [];
    public mineSkoleruter: Array<any> = [];
    public delteValgteSkoleRuter: Array<any> = [];
    public skoler: Skole[];
    public skoleRute: SkoleRuteData[];

    public leggTilSkole(skole: string, indeks: number): void {
      console.log(this.valgteSkoler);
        for(let skolen of this.valgteSkoler) {
          if(skolen === skole) {
            this.fjernSkole(skole);
            return;
          }
        }
        this.valgteSkoler.push(skole);
    }

    public mineSkoler(): Array<string> {
        return this.valgteSkoler;
    }

    public fjernSkole(skole: string) {
      let indeks = this.valgteSkoler.indexOf(skole);
      if (indeks > -1) {
          this.valgteSkoler.splice(indeks, 1);
      }
    }

    public lagreDataLokalt(){
      localStorage.setItem("delteValgteSkoleRuter", JSON.stringify(this.delteValgteSkoleRuter));
      localStorage.setItem("skoler", JSON.stringify(this.skoler));
      localStorage.setItem("skoleRute", JSON.stringify(this.skoleRute));
      localStorage.setItem("valgteSkoler", JSON.stringify(this.valgteSkoler));
    }
    public hentLagretData(){
      let hentdelteValgteSkoleRuter = localStorage.getItem("delteValgteSkoleRuter");
      this.delteValgteSkoleRuter = JSON.parse(hentdelteValgteSkoleRuter);
      console.log(this.delteValgteSkoleRuter);

      let hentskoler = localStorage.getItem("skoler");
      this.skoler = JSON.parse(hentskoler);
      console.log(this.skoler);

      let hentskoleRute = localStorage.getItem("skoleRute");
      this.skoleRute = JSON.parse(hentskoleRute);
      console.log(this.skoleRute);

      let hentvalgteSkoler = localStorage.getItem("valgteSkoler");
      this.valgteSkoler = JSON.parse(hentvalgteSkoler);
      if(this.valgteSkoler === null){ // Den kan ikke være null fordi da vil vi ikke kunne bruke push til å legge til skoler.
        this.valgteSkoler = [];
      }
      console.log(this.valgteSkoler);
    }






    public settMineSkoleruter(skoleruter:Array<any>)
    {
        this.mineSkoleruter = skoleruter;
        console.log("hei " + this.mineSkoleruter)
    }

    public hentMineSkoleruter()
    {
        return this.mineSkoleruter
    }
}
