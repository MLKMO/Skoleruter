import { Pipe, PipeTransform} from '@angular/core';
import { Skole } from './skole.type';

@Pipe({
    name: 'skoleListeFilter'
})

export class SkoleListeFilterPipe implements PipeTransform {
  transform(skoler: Array<Skole>, skolenavn: string): Array<any> {
    let skolenavnUpperCase = skolenavn.toLocaleUpperCase();
    let skolerFiltrert : Array<Skole>;

    if (skoler === undefined) {
      return undefined;     
    }

    skolerFiltrert = skoler.filter(skole => skole.skole.toLocaleUpperCase().indexOf(skolenavnUpperCase) !== -1
    ||(skole.TrykketPa));
  
    let teller = 1;
    for(let skole of skolerFiltrert){
      if(skole.TrykketPa === true){
        teller++;
      }
    }
    
    if(skolerFiltrert.length < teller){
      return [-1];
    }else{
      return skolerFiltrert;
    }
  }
   
}
