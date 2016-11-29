[![Build Status](https://travis-ci.org/MLKMO/Skoleruter.svg?branch=master)](https://travis-ci.org/MLKMO/Skoleruter)
[![npm version](https://badge.fury.io/js/%40angular%2Fcore.svg)](https://badge.fury.io/js/%40angular%2Fcore)

# Hvordan kjøre koden

Du trenger Node.js og npm.
Hvis du ikke har dette installert på maskinen kan det lastes ned her:

[Node.js og npm](https://nodejs.org/en/download/)

1. Klone repoet.

2. Kjør følgende kommandoer i terminalvinduet:

```
npm install
```
For å installere alle pakker som trengs for å kjøre koden

```
npm start
```
For å starte applikasjonen i nettleseren (localhost).

# Testing
For å starte testing, kjør: 

```
npm test
```


# Henting av data fra Stavanger og Gjesdal
Datagrunlaget for denne applikasjonen er csv-filer hentet fra nettside til [Stavanger kommune](https://open.stavanger.kommune.no/dataset).
Videre er Python brukt for å konvertere disse csv-filene om til json-filer.  
Kildekoden til disse scriptene finnes [her](https://github.com/MLKMO/Parse_skoledata)