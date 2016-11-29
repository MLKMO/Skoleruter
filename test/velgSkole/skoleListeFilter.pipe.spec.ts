import { SkoleListeFilterPipe} from'../../app/velgSkole/skole-liste-filter.pipe';
import { Skole } from'../../app/velgSkole/skole.type';

describe('skoleListeFilterPipe', () => {
  let skoler : Array<any>;
  skoler = [{skole: "Auglend skole"}, {skole: "Storhaug skole"}, {skole: "Ullandhaug skole"}];
  let skolerResultat: Array<any>;
  skolerResultat = [{skole: "Auglend skole"}];
  let skolenavn = "auglend";
  
  let pipe = new SkoleListeFilterPipe();
  it('Filtrerer skoler array med auglend som inputs', () => {
    expect(pipe.transform(skoler, skolenavn)).toEqual(skolerResultat);
  });
});
