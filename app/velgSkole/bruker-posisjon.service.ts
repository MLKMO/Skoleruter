import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

import { Skole } from './skole.type';

@Injectable() export class BrukerPosisjonService {
  public sorterAnimasjon: boolean;
     
  public sorterSkolerEtterAvstand(brukerLat: number, brukerLon: number, skoler: Array<Skole>): Array<Skole> {
      for(let skole of skoler){
        skole.avstand = this.distanseMellomToPunkter(brukerLat, brukerLon, skole.Latitude, skole.Longitude);
      }
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

  private distanseMellomToPunkter(lat1: number, lon1: number, lat2: number, lon2: number): number {
      let jordens_radius = 6373;
      let lat1_radian = lat1* Math.PI / 180;
      let lat2_radian = lat2* Math.PI / 180;
      let lon1_radian = lon1* Math.PI / 180;
      let lon2_radian = lon2* Math.PI / 180;
      let delta_lat = lat2_radian-lat1_radian;
      let delta_lon = lon2_radian-lon1_radian;
      let a = Math.sin(delta_lat/2) * Math.sin(delta_lat/2) +
        Math.cos(lat1_radian) * Math.cos(lat2_radian) *
        Math.sin(delta_lon/2) * Math.sin(delta_lon/2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      let d = jordens_radius * c;
      return Math.round(d * 10) / 10;
  }
  
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
