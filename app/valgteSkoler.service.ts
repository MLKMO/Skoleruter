import { Injectable } from '@angular/core';

@Injectable()

export class ValgteSkolerService
{
    private valgteSkoler: Array<string> = [];
    private skoleIndekser: Array<number> = [];

    public leggTilSkole(skole: string, indeks: number) :void {
        this.valgteSkoler.push(skole);
        this.skoleIndekser.push(indeks);
    }

    public mineSkoler(): Array<string> {
        return this.valgteSkoler;
    }
    public skoleIndeksListe(): Array<number> {
      return this.skoleIndekser;
    }

    public fjernSkole(skole: string): number {
      let indeks = this.valgteSkoler.indexOf(skole);
      let indeksTilSkole = this.skoleIndekser[indeks];

      if (indeks > -1) {
          this.valgteSkoler.splice(indeks, 1);
          this.skoleIndekser.splice(indeks, 1);
      }
      return indeksTilSkole;  // Returnerer indeksen til den skolen som blir fjernet slik at den kan bli lagt tilbake i riktig posisjon i skoler: Skole[]; arrayen.
    }
}
