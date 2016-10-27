import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatoService { 

    dato: Array<any>;

    constructor(private http: Http) {
        this.http = http;
    }

        getDato() {
            return this.http.request('app/kalendervisning/datoer.json')
                 .map(res => res.json());
        }   
}