import { Injectable, Attribute, OnInit } from '@angular/core';
import { NesteFridagArray}  from './neste-fridag.array';
import { DatePipe } from '@angular/common';
import { ValgteSkolerService } from './../valgteSkoler.service';
@Injectable()
export class NesteFridagService implements OnInit
{
    ngOnInit() 
    {
       this.setDagensDato();
    }
    public nesteFridag: Array<any> = [];
    private test: Array<any> = [];
    private dagensDato: Date;   
    constructor(private nesteFridagArray:NesteFridagArray,
                private valgteSkolerService: ValgteSkolerService) {}

    private fridager: Array<any> = this.valgteSkolerService.hentMineSkoleruter();

    setDagensDato()
    {
        var dataPipe = new DatePipe();        
        this.dagensDato =  new Date(); 
        this.dagensDato = dataPipe.transform(this.dagensDato, 'yyyy-MM-dd')
    }

    hentDagensDato()
    {
        return this.dagensDato;
    }

    finnNesteFridag()
    {
        

        for (var i = 0; i < this.fridager.length; i++)
        {
            if(this.test.indexOf(this.fridager[i].skole) == -1 && this.fridager[i].dato > this.dagensDato)
            {
                this.test.push(this.fridager[i].skole);
                this.nesteFridag.push(this.fridager[i])
            }
        }
        console.log(this.dagensDato);
        console.log(this.nesteFridag);
        return this.nesteFridag;
    }

}