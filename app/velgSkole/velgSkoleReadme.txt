Dokumentasjon på velgSkole komponenter

NB!
For å få lastet inn json data så må json fila starte på følgende måte:
{
  "data": [
    {
      "skole": "Auglend skole"
    },




Todo:

Få til data pasing mellom komponenter

Kan koble kontakt informasjon til skolene som blir valgt så disse kan bli vist med en info tag




Filer:

skoleData.service.ts
  Denne henter ut data fra en json fil og lagrer dette i en Array(observable<Skole[]>).

skoleListe.component.ts
  Henter inn data fra skoleData.service og lagrer dette i skoler: Skole[] variabelen.

skole.ts
  Er en klasse for Skole objekter.


skoleListeComponent.html
  Dette er en html fil som blir brukt av skoleListe.component.ts til å presentere data.Den tar inn to stk arrays: en skoler: Skole[]; som blir brukt til å presentere skoler og en mineSkoler: Array<string>; som blir brukt å vise valgte skoler.

skoleListeFilter.pipe.ts
  En pipe som filtrerer data og returnerer de skoleobjektene som er relevante for applikasjonen.

valgteSkoler.service.ts
  Brukes til å behandle valgte skoler
    Lagring og fjerning av valgte skoler
    Lagrer indekser på skoler som har blitt valgt slik at disse kan bli lagt tilbake hvis brukeren fjerner et valg
