import { Injectable, Attribute, OnInit, OnDestroy } from '@angular/core';
import { ValgteSkolerService } from './../valgteSkoler.service';

@Injectable()
export class VarslingService {
    constructor(private valgteSkolerService: ValgteSkolerService) {}
    private valgte_skoler :Array<string> = [];
    private topics:Array<string> = [];
    private abonnerer = "";
    private gammel_topics_liste: any;
    
 
    public getTopics(){
        this.valgteSkolerService.getLagretData();
        this.valgte_skoler = this.valgteSkolerService.getValgteSkoler();
        this.topics = this.lag_topic_liste(this.valgte_skoler);
        localStorage.setItem("topicsListe", JSON.stringify(this.topics));
        console.log(this.topics);
    }

//Funksjon som lager topics navn basert på Valgte skoler.
//Identisk kode sammenlignet med node.js kode på server. 
   private lag_topic_liste(valgteskoler : Array<string>): Array<string>{
       let liste :Array<string> = [];
       let navn : string;
       for(let i = 0; i <valgteskoler.length; i++){
           navn = this.lag_fcm_topic_navn(valgteskoler[i]);
           liste.push(navn);
       }
       return liste;
   }

   private lag_fcm_topic_navn(skolenavn:string){
    let skolenavn_uten_mellomrom = this.fjern_mellomrom(skolenavn);
    let skolenavn_uten_norske_tegn = this.fjern_norske_tegn(skolenavn_uten_mellomrom);
    return skolenavn_uten_norske_tegn;
   }

//Funksjon for å fjerne mellomrom i string
//Bruker regex syntax for å finne mellomrom. s står for space
    private fjern_mellomrom(skolenavn:string){
    var nyttSkolenavn = skolenavn.replace(/\s/g, "");
    return nyttSkolenavn;
    }

//Siden topics ikke kan inneholde navn med æ, ø og å så må disse karaterene fjernes fra topic navnene.
    private fjern_norske_tegn(skolenavn:string){
        let nyttSkolenavn1 = skolenavn.replace(/\æ/g,"ae");
        let nyttSkolenavn2 = nyttSkolenavn1.replace(/\Æ/g,"AE");
        let nyttSkolenavn3 = nyttSkolenavn2.replace(/\ø/g,"oo");
        let nyttSkolenavn4 = nyttSkolenavn3.replace(/\Ø/g,"OO");
        let nyttSkolenavn5 = nyttSkolenavn4.replace(/\å/g,"aa");
        let nyttSkolenavn6 = nyttSkolenavn5.replace(/\Å/g,"AA");
      return nyttSkolenavn6;
    }
}