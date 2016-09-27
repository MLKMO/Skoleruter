import { Pipe, PipeTransform} from '@angular/core';
import { Skole }  from './skole';

@Pipe({
    name: 'skoleListeFilter'
})

export class SkoleListeFilterPipe implements PipeTransform {

  transform(skoler: Skole[], skolenavn: string): any {
    var skolenavnUpperCase= skolenavn.toLocaleUpperCase();
    var barneskole=613;     //613 er byggnr som viser til barneskoler i skoler.json
    var ungdomskole=614;    //614 er byggnr som viser til ungdomskoler i skoler.json

    if (skoler == undefined){
      return undefined;     //Hvis filtret laster inn før skoler har blitt lastet inn
    }

    return skoler.filter(skole => skole.Skolenavn.toLocaleUpperCase().indexOf(skolenavnUpperCase) != -1
     && (skole.BYGGTYP_NBR==barneskole||skole.BYGGTYP_NBR==ungdomskole));
   }
}
