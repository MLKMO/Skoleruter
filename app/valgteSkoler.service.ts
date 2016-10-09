import { Injectable } from '@angular/core';

@Injectable()

export class ValgteSkolerService
{
    private valgteSkoler: Array<string> = [];
    public mineSkoleruter: Array<any> = [];

    public leggTilSkole(skole: string, indeks: number) :void {
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
