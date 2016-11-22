import { Injectable, Attribute, OnInit, OnDestroy } from '@angular/core';

import { ValgteSkolerService } from './../valgteSkoler.service';

@Injectable()
export class NesteFridagService implements OnInit
{
    public nesteFridag: Array<any> = [];
    private skoler: Array<any> = [];
    private dagensDato: any;
    public dagensDag: number;
    public dagensMaaned: number;
    public dagensAar: number;
    private skoleAar:number;
    private skoleMaaned:number;
    private skoleDag:number;
    constructor(private valgteSkolerService: ValgteSkolerService) {}

    setDagensDato()
    {
        this.dagensDato =  new Date().toISOString().slice(0, 10);
        this.dagensAar = parseInt(this.dagensDato.slice(0,4));
        this.dagensMaaned = parseInt(this.dagensDato.slice(5,8));
        this.dagensDag = parseInt(this.dagensDato.slice(8,10));
    }

    hentDagensDato()
    {
        return this.dagensDato;
    }

    finnNesteFridag(valgteSkoleruter:Array<any>)
    { 
        for (var i = 0; i < valgteSkoleruter.length; i++)
        {
            this.skoleAar = parseInt(valgteSkoleruter[i].dato.slice(0,4))
            this.skoleMaaned = parseInt(valgteSkoleruter[i].dato.slice(5,8))
            this.skoleDag = parseInt(valgteSkoleruter[i].dato.slice(8,10))

            if(this.skoler.indexOf(valgteSkoleruter[i].skole) == -1 && this.skoleAar >= this.dagensAar)
            {
                if(this.skoleMaaned == this.dagensMaaned)
                {
                    if(this.skoleDag >= this.dagensDag)
                    {
                        this.skoler.push(valgteSkoleruter[i].skole);
                        this.nesteFridag.push(valgteSkoleruter[i])
                    }
                }
                else if(this.skoleMaaned > this.dagensMaaned)
                {
                     this.skoler.push(valgteSkoleruter[i].skole);
                     this.nesteFridag.push(valgteSkoleruter[i]) 
                }
            }
        }
        // Sorterer etter dato
        var nesteFridagSort = this.nesteFridag.slice(0);
        nesteFridagSort.sort(function(a,b) 
        {
            var x = a.dato;
            var y = b.dato;
            return x < y ? -1 : x > y ? 1 : 0;
        });

        return nesteFridagSort;
    }

    tomNesteFridagListe()
    {
      this.skoler = [];
      this.nesteFridag = [];
    }

        ngOnInit()
    {
       this.setDagensDato();
    }
}
