import { SkoleListeFilterPipe} from'../../app/velgSkole/skoleListeFilter.pipe';
import { Skole } from'../../app/velgSkole/skole';

describe('skoleListeFilterPipe', () => {
  let skoler : Array<any>;
  skoler = [{skole: "Auglend skole"}, {skole: "Storhaug skole"}, {skole: "Ullandhaug skole"}];
  let skolerResultat: Array<any>;
  skolerResultat = [{skole: "Auglend skole"}];

  let skolenavn = "auglend";
  // This pipe is a pure, stateless function so no need for BeforeEach
  let pipe = new SkoleListeFilterPipe();
  it('Filtrerer skoler array med auglend som inputs', () => {
    expect(pipe.transform(skoler, skolenavn)).toEqual(skolerResultat);
  });
});
