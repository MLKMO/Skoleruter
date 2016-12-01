import { Injectable } from '@angular/core';

@Injectable()
export class LeggIKalenderService
{
    public icalKropp: string = "";
    public icalFil:string;
    public data = new Blob([], {type: 'text/ics'});
    
    private dagensDato: string;
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
    private metode: string = "METHOD:PUBLISH\n";
    private tidssone: string = "X-WR-TIMEZONE:UTC\n";
    private status: string = "STATUS:CONFIRMED\n";
    private klasse: string = "CLASS:PUBLIC\n";
    private opprettet: string = "CREATED:";
    private sistModifisert: string = "LAST-MODIFIED:20161130T130006Z\n"
    private sekvens: string = "SEQUENCE:0\n";

    public lagICalKropp(dato:string, skole:string, kommentar:string)
    {
        let skoleUtenMellomrom = this.fjernMellomrom(skole);
        let kommentarUtenMellomrom = this.fjernMellomrom(kommentar);
        this.dagensDato = new Date().toISOString();
        this.dagensDato = this.endreDatoformat(this.dagensDato);

        let icalEvent = 
        this.icalKropp + "" + 
        this.icalElementStart + "" + 
        "DTSTART;VALUE=DATE:" + dato + "\n" + 
        "DTEND;VALUE=DATE:"+ dato + "\n" + 
        "DTSTAMP:" + this.dagensDato + "\n" + 
        "UID:" + dato + "" + skoleUtenMellomrom + "" 
        + kommentarUtenMellomrom + "@skoleruter.top"+ "\n" + 
        this.klasse + 
        this.opprettet + this.dagensDato + "\n" + 
        this.beskrivelse + skole + ": " + kommentar + "\n" +
        this.sistModifisert + 
        this.sekvens + 
        this.status + 
        this.organiserer + "" + 
        "SUMMARY:" + skole + " " + kommentar + "\n" + 
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
        this.metode + "" + 
        this.tidssone + "" +  
        this.icalKropp + "" + 
        this.icalSlutt;
        
        return this.icalFil;
    }

    public lastNedKalender(icalFil:string)
    {
        var blob = new Blob([icalFil], {type: "application/octet-stream"});
        saveAs(blob, "Skoleruter.ics");

        icalFil = "";
    }

    private fjernMellomrom(setning:string)
    {
        setning = setning.replace(/\s+/g, '');
        return setning
    }

    private endreDatoformat(dato:string)
    {
        let tempDato = dato.slice(0,19);
        tempDato = tempDato.replace(/\-/g,'');
        tempDato = tempDato.replace(/\:/g, '');
        tempDato = tempDato+='Z';
        return tempDato;
    }

    public tomAlleVariabler()
    {
        this.icalKropp = "";
        this.icalFil = "";
        this.data = null; 
        this.dagensDato = null;
    }
}