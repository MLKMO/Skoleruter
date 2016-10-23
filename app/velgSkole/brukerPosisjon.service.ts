import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Skole } from './skole';
import { Http, Response } from '@angular/http';

@Injectable() export class BrukerPosisjonService {
  constructor (private http: Http) {}

    private skoleMedAvstand : Array<Skole> = [];
    private skoler: Array<Skole> = [];
    private ferdigSortert: Array<Skole>;

    public sorterSkolerEtterAvstand(brukerLat: number, brukerLon: number, skolerMedLokasjon: Skole[], skoler: Skole[]): Skole[] {
      for(let skole of skolerMedLokasjon){
        skole.avstand = this.distanseMellomToPunkter(brukerLat, brukerLon, skole.Latitude, skole.Longitude);
      }
      for(let skole of skolerMedLokasjon) {
        this.skoleMedAvstand.push(skole);
      }
      this.ferdigSortert = this.mergesort(this.skoleMedAvstand);
      for (let skole of this.ferdigSortert) {
        for (let skolerlok of skoler) {
          if(skolerlok.skole == skole.Skolenavn) {
            this.skoler.push(skolerlok);
          }
        }
      }
      for (let i = 0 ; i < this.skoler.length ; i++) {
        this.skoler[i].avstand = Math.round((this.ferdigSortert[i].avstand/1000) * 10) / 10;
      }
      return this.skoler;
    }

  private mergesort(skoler: Array<Skole>): Array<Skole> {
    if (skoler.length < 2)
        return skoler;
    let middle = skoler.length / 2;
    let left: Array<Skole>   = skoler.slice(0, middle);
    let right: Array<Skole>  = skoler.slice(middle, skoler.length);
    return this.merge(this.mergesort(left), this.mergesort(right));
  }

  private merge(left: Array<Skole>, right: Array<Skole>): Array<Skole>{
    let result: Array<Skole> = [];
    while (left.length && right.length) {
        if (left[0].avstand <= right[0].avstand) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
  }

    private distanseMellomToPunkter(lat1:number, lon1:number,lat2:number,lon2:number):number{
      let R = 6371000; // metres
      let lat1Radian = lat1* Math.PI / 180;
      let lat2Radian = lat2* Math.PI / 180;
      let deltaLat = (lat2-lat1)* Math.PI / 180;
      let deltaLon = (lon2-lon1)* Math.PI / 180;
      let a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
        Math.cos(lat1Radian) * Math.cos(lat2Radian) *
        Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      let d = R * c;
      return d;
    }

    public getBrukerPosisjon(): Observable<Position> {
        return new Observable((observer: Observer<Position>) => {
            // Invokes getCurrentPosition method of Geolocation API.
            navigator.geolocation.getCurrentPosition(
                (position: Position) => {
                    observer.next(position);
                    observer.complete();
                },
                (error: PositionError) => {
                    console.log('Geolocation service: ' + error.message);
                    observer.error(error);
                }
            );
        });
    }
}
