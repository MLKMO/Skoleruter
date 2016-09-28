import { Injectable } from '@angular/core';

@Injectable()

export class ValgteSkolerService
{
    public valgteSkoler: Array<string> = [];
    public skoleIndekser: Array<number> = [];

    public leggTilSkole(skole:string, indeks:number) :void{
        this.valgteSkoler.push(skole);
        this.skoleIndekser.push(indeks);
    }

    public mineSkoler(){
        return this.valgteSkoler;
    }
    public skoleIndeksListe(){
      return this.skoleIndekser;
    }

    public fjernSkole(skole:string):number {
      var indeks = this.valgteSkoler.indexOf(skole);
      var indeksTilSkole=this.skoleIndekser[indeks];

      if (indeks > -1) {
          this.valgteSkoler.splice(indeks, 1);
          this.skoleIndekser.splice(indeks, 1);
      }
      return indeksTilSkole;  //Returnerer indeksen til den skolen som blir fjernet slik at den kan bli lagt tilbake i riktig posisjon i skoler: Skole[]; arrayen.
    }
}
