export interface Skole{
     Nord:number,
     ost:number,  //Denne fungerer ikke. angular greier ikke å gjennkjenne denne
     Latitude:number,
     Longitude:number,
     ID:number,
     OBJTYPE:string,
     KOMM:number,
     BYGGTYP_NBR:number,
     INFORMASJON:string,
     Skolenavn:string,
     ADRESSE:string,
     Hjemmeside:string,
     ELEVER:string,
     KAPASITET:string
}
/*
export class Skole{
  constructor(
    public id:number,
    public name:string,
    public Skolenavn:string
  ){}

}
*/
