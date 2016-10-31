import { Pipe, PipeTransform} from '@angular/core';
import { Skole } from './skole';

@Pipe({
    name: 'skoleListeFilter'
})

export class SkoleListeFilterPipe implements PipeTransform {
  transform(skoler: Array<Skole>, skolenavn: string): Array<any> {
    let skolenavnUpperCase = skolenavn.toLocaleUpperCase();
    let skolerFiltrert : Array<Skole>;
    if (skoler === undefined) {
      return undefined;     // Hvis filtret laster inn før skoler har blitt lastet inn
    }
    skolerFiltrert = skoler.filter(skole => skole.skole.toLocaleUpperCase().indexOf(skolenavnUpperCase) !== -1
    ||(skole.TrykketPa));
  
    //Lager en teller som sjekker hvor mange skoler som er valgt slik at brukeren får opp 
    //(finner ingen skoler) når det gjøres søk etter mer enn en skole.
    let teller = 1;
    for(let skole of skolerFiltrert){
      if(skole.TrykketPa === true){
        teller++;
      }
    }
    //Returnerer [-1] som indikasjon på at skolen som søkes etter ikke er i listen(brukes for å vise "finner inge skole")
    if(skolerFiltrert.length < teller){
      return [-1];
    }else{
      return skolerFiltrert;
    }
   }
}
