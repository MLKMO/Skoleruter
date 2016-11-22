import { Injectable } from '@angular/core';

@Injectable()
export class LeggIKalenderService
{
    public icalKropp: string = "";
    public icalFil:string;
    public data = new Blob([], {type: 'text/ics'});
    
    private dagensDato: Date;
    private icalStart: string = "BEGIN:VCALENDAR\n";
    private icalSlutt: string = "END:VCALENDAR\n";
    private icalElementStart: string = "BEGIN:VEVENT\n"
    private icalElementStopp: string = "END:VEVENT\n"
    private versjon: string = "VERSION:2.0\n"
    private proid: string = "PRODID:skoleruter.top/v1\n"
    private uid: string = "UID:uid1@example.com\n";
    private organiserer: string = "ORGANIZER:CN=Skoleruter\n";
    private calscale: string = "CALSCALE:GREGORIAN\n";
    private beskrivelse: string = "DESCRIPTION:";

    public lagICalKropp(dato:string, skole:string, kommentar:string)
    {
        let skoleUtenMellomrom = this.fjernMellomrom(skole);
        let kommentarUtenMellomrom = this.fjernMellomrom(kommentar);
        this.dagensDato = new Date();

        let icalEvent = 
        this.icalKropp + "" + 
        this.icalElementStart + "" + 
        this.beskrivelse + skole + ": " + kommentar + "\n" +
        "DTSTAMP:" + "" + String(this.dagensDato)+ "\n" + 
        this.organiserer + "" + 
        "DTSTART:" + dato + "T060000Z\n" + 
        "DTEND:"+ dato + "T150000Z\n" + 
        "SUMMARY:" + skole + " " + kommentar + "\n" +
        "UID:" + dato + "" + skoleUtenMellomrom + "" + kommentarUtenMellomrom + "@skoleruter.top\n" +  
        this.icalElementStopp;
        
        this.icalKropp = icalEvent;
        return this.icalKropp;
    }

    public LagICalFil(icalKropp:string)
    {
        this.icalFil = 
        this.icalStart + "" + 
        this.proid + "" + 
        this.versjon + "" + 
        this.icalKropp + "" + 
        this.icalSlutt;
        
        return this.icalFil;
    }

    public skrivTilFil(icalFil:string)
    {
        var blob = new Blob([icalFil], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "Skoleruter.ics");

        icalFil = "";
    }

    private fjernMellomrom(setning:string)
    {
        setning = setning.replace(/\s+/g, '');
        return setning
    }

    public tomAlleVariabler()
    {
        this.icalKropp = "";
        this.icalFil = "";
        this.data = null; 
        this.dagensDato = null;
    }
}