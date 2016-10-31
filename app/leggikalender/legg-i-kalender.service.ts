import { Injectable } from '@angular/core';

@Injectable()
export class LeggIKalenderService
{

    public icalKropp: string = "";
    public icalFil:string;
    public data = new Blob([], {type: 'text/ics'});
    private dagensDato = new Date();

    private icalStart: string = "BEGIN:VCALENDAR\n";
    private icalSlutt: string = "END:VCALENDAR\n";
    private icalElementStart: string = "BEGIN:VEVENT\n"
    private icalElementStopp: string = "END:VEVENT\n"
    private versjon: string = "VERSION:2.0\n"
    private periode: string = "PRODID:-//hacksw/handcal//NONSGML v1.0//EN\n"
    private uid: string = "UID:uid1@example.com\n";
    private organiserer: string = "ORGANIZER;CN=Skoleruter\n";
    private calscale: string = "CALSCALE:GREGORIAN\n";

    public LagICalKropp(dato:string, skole:string, kommentar:string)
    {
        let icalElement = 
        this.icalKropp + "" + 
        this.icalElementStart + "" + 
        "DTSTAMP:" + "" + this.dagensDato + "\n" + 
        this.organiserer + "" + 
        "DTSTART:" + dato + "T060000Z\n" + 
        "DTEND:" + dato + "T150000Z\n" + 
        "SUMMARY:" + skole + ": " + kommentar + "\n" + 
        this.icalElementStopp;
        
        this.icalKropp = icalElement;
        return this.icalKropp;
    }

    public LagICalFil(icalKropp:string)
    {
        this.icalFil = 
        this.icalStart + "" + 
        this.versjon + "" + 
        //this.periode + "" + 
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
}