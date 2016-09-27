import { Injectable } from '@angular/core';

@Injectable()

export class ValgteSkolerService
{
    public valgteSkoler: Array<string> = [];

    public leggTilSkole(skole:string) :void
    {
        this.valgteSkoler.push(skole)
    }

    public mineSkoler()
    {
        return this.valgteSkoler;
    }


    //Fungerer ikke
    public fjernSkole(skole:string):void
    {
      for(let valg in this.valgteSkoler )
      {
        if (valg==skole)
        {
          valg=null;
          break;
        }
      }
    }
}
