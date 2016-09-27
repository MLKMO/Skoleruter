[![Build Status](https://travis-ci.org/MLKMO/Skoleruter.svg?branch=master)](https://travis-ci.org/MLKMO/Skoleruter)
# Informasjon

## Data
 [Link](http://open.stavanger.kommune.no/dataset/86d3fe44-111e-4d82-be5a-67a9dbfbfcbb/resource/32d52130-ce7c-4282-9d37-3c68c7cdba92/download/skolerute-2016-17.csv "Data fra stvg. kommune") til skolerutedata stavanger 2016-2017

## Trello
Alle er invitert til trello og har godtatt invitasjonen, men her er en [link](https://trello.com/b/tHSNYi3b/prosjekt-dat210 "Trello") til siden vår på Trello hvis noen trenger det. Trello finnes også som app til telefon.  

## User stories
User stories og akseptansekriterier kan finnes [her](UserStoriesAkseptansekrit.md)    


## GitHub
I masterbranch skal det alltid ligge en fungerende applikasjon som inneholder alle features som er ferdig utvikliet. 
Vi lager en ny "branch" pr. feature også merger denne med master når den er helt ferdig. Feks. lager en ny branch for kalendervisning hvor utviklingen av denne foregår. Når kalendervisningen er helt ferdig merges den med master branchen slik at det fungerende prosjektet får kalendervisningen implementert.

Hvis git i terminal/git bash/powershell osv. er forvirrende finnes det en enkel desktopapplikasjon som er veldig intuetiv, spesielt med tanke på braching. Denne kan lastes ned [her](https://www.sourcetreeapp.com/ "Source tree") 

### Cheat sheet
 [Link](https://services.github.com/kit/downloads/github-git-cheat-sheet.pdf "GitHub cheat sheet") 


## Hvordan få Angular 2 til å fungere: 
Gå til denne [siden (bucky)](https://github.com/buckyroberts/angular-2-template "Buckys git")

## Tutorials

### Microsoft Acadamy 
Har en god tutorial på Angular2, som går igjennom de viktigste delene i en Angular2 kode, hvordan de fungerer og hvordan de komminuserer med hverandre. Denne tutorialen kan finnes [her].(https://mva.microsoft.com/en-US/training-courses/introduction-to-angular-20-16540?l=cdKMEZyfC_906218965 "Microsoft Acadamy Angular2")

## Generel informasjon om Angular2
For generell informasjon om Angular2 finnes det mye informasjon på [Angular2](http://www.angular2.com/ "Angular2")
 sin egen nettside. 


# Retningslinjer for kode og mappestruktur. 
Denne seksjonen inneholder retningslinjer for hvordan kode og mappestruktur bør være. Hvis alles kode ser noen lunde lik ut og alle følger disse retningslinjene blir det enklere og hjelpe hverandre, hente deler fra andre sin kode og ting blir mer oversiktlig. Utgangspunktet for disse retningslinjene finnes [her] (https://angular.io/docs/ts/latest/guide/style-guide.html "STYLE GUIDE"). 

## Mappestruktur
- All kode skal ligge under mappen app/...
- Lag en egen mappe for hver "egenskap", eks en mappe for prosessering av data hvor alle filer som har med importering av data fra stvg.kommune, strukturering av dataen osv ligger. 
- Alle .js -filene blir automatisk lagt inn i "built" som ligger under "app". 
- Alle testfiler legges i "test" under egen mappe (se eks. under). Mer info om testing finnes senere i dokumentet. 

Dette gjør at mappestrukturen blir noe alà dette: 

```
├── app/
├── ├── built/
├── ├── ├── app/
├── ├── ├── ├── dataprossesering/
├── ├── ├── ├── kalendervisning/

├── ├── test/
├── ├── ├── dataprossesering/
├── ├── ├── ├── dataprossesering.spec.ts
├── ├── ├── kalendervisning/
├── ├── ├── ├── kalendervisning.spec.ts

├── ├── dataprossesering/
├── ├── ├── dataprossesering.component.ts
├── ├── ├── dataprossesering.service.ts
├── ├── ├── html/
├── ├── ├── ├── dataprossesering.component.html
├── ├── ├── css/
├── ├── ├── ├── dataprossesering.component.css

├── ├── kalendervisning/
├── ├── ├── kalendervisning.component.ts
├── ├── ├── html/
├── ├── ├── kalendervisning.component.html
├── ├── ├── css/
├── ├── ├── kalendervisning.component.css
```

## Filer: 
 - Alle filer skal navgis på følgende måte: **navn.type.filtype**.
 - En fil gjør en ting, altså en *Component* eller *Service* osv. pr. fil.
 - Filene navngis slik at det er lett å skjønne hva de inneholder.

 Dette gjør at filene vil hete noe alà dette: *sokefelt.component.ts*, *sokefelt.service.ts*, *sokefelt.component.html* osv. 

## I koden: 
- Klassen i en fil navgis på følgende måte: Hvis filnavnet er **filnavn.component.ts** skal klassen hete *FilnavnComponent*. Hvis filnavnet er på følgende form: **langt-filnavn.component.ts**, så skal klassen hete *LangtFilnavnComponent*. 
- *Selector* skal navgis med små bokstaver: eks *app*. Hvis navnet består av to ord skal disse skilles med bindestrek (-), *my-app*. 
- Konstanter skal navgis ved bruk av "lower camel case", eks: *const enKonstant*. 
- Metoder navngis med små bokstaver, eks: *metode()*
- Ha en blank linje mellom importeringer fra tredjepart og import av egne filer. 
- Hvis *template* i en component er over 3 linjer skal den ligge i en egen fil som importeres. 
- Logikk i *Component* skal begrenses til det som har med fremvisning å gjøre, all annen logikk skal plasserers i *Service*.
- Legg presentasjonslogikk i klassen til en *Component* og ikke i *template*
- Plasser bootstraping og platformlogikk i filen **main.ts**. Ikke legg annen logikk i denne filen. 

Eksempel på hvordan en fil skal se ut: 

```typescript
import { OnInit, Component } from '@angular/core'; /*Import fra tredjepart*/

import { Sokefelt } from './sokefelt.model'; /*Import fra egne filer*/

@Component({
/*Hvis navnet består av to ord skal de separeres med -*/
  selector: 'kalendervisning',
/*Hvis template består av mer enn tre linjer, legg html i egen fil */ 
  templateUrl: 'kalendervisning.component.html' 
})
/* Klassen heter det samme som "selektoren", bare stor forbokstav.
 Hvis navnet til "selector" består av to ord skal hver ord i klassenavnet ha stor bokstav*/
export class KalendervisningComponent implements OnInit { 
    /* Inneholder logikk som brukes i fremvisning*/
  constructor() { }
  ngOnInit() { }
}

```

# Testing
Til å teste koden bruker vi Jasmine og Karma. Testene kjøres ved "npm test" -kommandoen i terminal/cmd -vinduet. 
Når denne kommandoen kjøres i "root mappen" til prosjektet (den mappen som inneholder tsconfig osv.).
Dette vil åpne ett nytt "chrome" vindu. For å inspisere hvordan testen har gått kan en trykke "degug" -knappen.
Alle tester har fileending ".spec.ts", dette er for at Jasmine skal skjønne at det er en test. 
Det er laget en enkel test som ligger i mappen test/test1 (sanity_test.spec.ts). 

```typescript
describe('universal truths', () => {
  it('should do math', () => {
    expect(1 + 1).toEqual(2);

    expect(5).toBeGreaterThan(4);
  });

  xit('should skip this', () => {
    expect(4).toEqual(40);
  });
});

```
Når denne testen nå kjøres vil den gi "passed" da 1+1 = 2 og *xit* betyr at den skal skippe *expect(4).toEqual(40);*.
Hvis en endrer *expect(1 + 1).toEqual(2);* til *expect(1 + 1).toEqual(3);* vil testen "faile", da 1+1 ≠ 3.
Hvis en endrer *xit* til *it* vil en kjøre testen og faile da 4 ≠ 40. 

Til nesten all kode som skrives bør det også skrives en test. Hvis man feks. lager en "pipe" som transformerer alle 
elementer i en liste til store bokstaver bør en lage en test som bruker pipen og verifiserer at pipen gir ut samme liste,
men bare med store bokstaver. 
[Denne siden] (https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584#.ff3nzxiy8
 "Angular 2 — Unit Testing recipes") gir en innføring i hvordan man skriver tester i Angular 2. Alt er satt opp, 
 men anbefaler allikevel alle å lese hele artikkelen for å skjønne hvordan en test fungerer. Hvordan man skriver tester
 er beskrevet fra "Unit Testing recipes for Angular 2" og nedover. 