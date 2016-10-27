import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Skole } from './skole';
import { Observable } from 'rxjs/Observable';
import { SkoleRuteData} from './skoleRuteData';

@Injectable()
export class SkoleDataService {
  constructor (private http: Http) {}

  public getSkoler (): Observable<Array<Skole>>{
    let skoleUrl = 'app/velgSkole/skolerMedLokasjon.json'; 
    return this.http.get(skoleUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public getSkoleRuteData (): Observable<Array<SkoleRuteData>> {
    let skoleRuteUrl = 'app/velgSkole/skolerute-felles-2016-17.json'; 
    return this.http.get(skoleRuteUrl)
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
