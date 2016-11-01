import {Cell} from './kalender.component';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatoService {
  constructor (private http: Http) {}
    
public getDato (): Observable<Array<Cell>>{
    let dataUrl = '/app/kalendervisning/datoer.json'; 
    return this.http.get(dataUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
                    
  } 
private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

