import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Skole } from './skole';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SkoleDataService {
  constructor (private http: Http) {}

  private skoleUrl = 'app/importData/skoler.json'; //Liste med skoler i stavanger

  getskoler (): Observable<Skole[]> {
    return this.http.get(this.skoleUrl)
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
