import { Pipe, PipeTransform} from '@angular/core';
import { Skole } from './skole';

@Pipe({
    name: 'skoleListeFilter'
})

export class SkoleListeFilterPipe implements PipeTransform {

  transform(skoler: Skole[], skolenavn: string): Skole[] {
    let skolenavnUpperCase = skolenavn.toLocaleUpperCase();
    
    if (skoler === undefined) {
      return undefined;     // Hvis filtret laster inn før skoler har blitt lastet inn
    }

    return skoler.filter(skole => skole.skole.toLocaleUpperCase().indexOf(skolenavnUpperCase) !== -1
    ||(skole.TrykketPa));
   }
}
