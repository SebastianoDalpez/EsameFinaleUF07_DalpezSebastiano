export type TJoke = IJoke[];
/**
    * IJoke "serve" per "controllare" il singolo elemento 
    * TJoke "serve" per "controllare" una moltitudine di elementi
*/
export interface IJoke { 
    /**
        * il ".id", ".setup", ".punchline", ".type"
        * sono le props degli oggetti di tipo Joke, ovvero sono gli unici campi presenti 
        * negli oggetti che arrivano dalla fetch. 
        * Questo significa che quegli oggetti hanno solo un numero limitato di campi, 
        * in questo caso sono (type, setup, punchline, id).
        * Questo porta ad un vantaggio principale, ovvero quello di avere la sicurezza 
        * che dentro quegli oggetti non ci saranno mai campi diversi da quelli definiti nell'interfaccia
        * (se si prova ad accedere ad un campo non esistente (ad esempio "author") React darà errore).
        * 

        * 
     */

    //questi 4 attributi sono gli unici che possono essere applicati agli oggetti di tipo "Joke"
    "type": string
    "setup": string
    "punchline": string
    "id": number
}   
  