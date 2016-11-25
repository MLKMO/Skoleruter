import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Skole } from './skole';


@Injectable() export class BrukerPosisjonService {
     public sorterAnimasjon: boolean;
     
  public sorterSkolerEtterAvstand(brukerLat: number, brukerLon: number, skoler: Array<Skole>): Array<Skole> {
      //Lagrer avstand fra brukerposisjon på skolene i skolerMedLokasjon
      for(let skole of skoler){
        skole.avstand = this.distanseMellomToPunkter(brukerLat, brukerLon, skole.Latitude, skole.Longitude);
      }
      //Sorterer skolene etter avstand ved hjelp av en mergesort algoritme.
      skoler = this.mergesort(skoler);
      return skoler;
  }

  private mergesort(skoler: Array<Skole>): Array<Skole> {
    if (skoler.length < 2)
        return skoler;
    let midten = skoler.length / 2;
    let venstre: Array<Skole> = skoler.slice(0, midten);
    let hoyre: Array<Skole> = skoler.slice(midten, skoler.length);
    return this.merge(this.mergesort(venstre), this.mergesort(hoyre));
  }

  private merge(venstre: Array<Skole>, hoyre: Array<Skole>): Array<Skole>{
    let resultat: Array<Skole> = [];
    while (venstre.length && hoyre.length) {
        if (venstre[0].avstand <= hoyre[0].avstand) {
            resultat.push(venstre.shift());
        } else {
            resultat.push(hoyre.shift());
        }
    }
    while (venstre.length)
        resultat.push(venstre.shift());
    while (hoyre.length)
        resultat.push(hoyre.shift());
    return resultat;
  }

  //Bruker haversine formel til å beregne avstand mellom to punkter
  private distanseMellomToPunkter(lat1: number, lon1: number, lat2: number, lon2: number): number {
      let R = 6373; // Jordens radius i km
      let lat1Radian = lat1* Math.PI / 180;
      let lat2Radian = lat2* Math.PI / 180;
      let lon1Radian = lon1* Math.PI / 180;
      let lon2Radian = lon2* Math.PI / 180;
      let deltaLat = lat2Radian-lat1Radian;
      let deltaLon = lon2Radian-lon1Radian;
      let a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
        Math.cos(lat1Radian) * Math.cos(lat2Radian) *
        Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      let d = R * c;
      return Math.round(d * 10) / 10;
  }
  
  //Henter brukerposisjon basert på HTML5 geolocation API
  public getBrukerPosisjon(): Observable<Position> {
        return new Observable((observer: Observer<Position>) => {
            navigator.geolocation.getCurrentPosition(
                (position: Position) => {
                    observer.next(position);
                    observer.complete();
                },
                (error: PositionError) => {
                    this.sorterAnimasjon = false;
                    alert("Fikk ikke hentet ut din posisjon fra nettleseren, men du kan fortsatt søke etter eller velge skoler fra listen");
                    observer.error(error);
                }
            );
        });
  }
}
