import {useEffect, useState} from "react";
import type {IJoke, TJoke} from '../interfaces/jokeInterface';
import { useQuery } from "@tanstack/react-query"


interface IJokeList{ //Questa interfaccia determina il fatto che qualsiasi altro componente che voglia utilizzare al suo interno il componente JokeList (quindi essere il padre di JokeList) durante l'invocazione di JokeList deve fornire necessariamente un oggetto (props) che contenga una proprietà chiamata "selezionaApi" di tipo number.
    selezionaApi: number;
}

                    //la chiave che viene scritta dentro le {} è la proprietà che vogliamo estrarre dall'oggetto generale (in questo caso vogliamo estrarre "selezionaApi" da "props")
function JokeList  ({selezionaApi}: IJokeList) { //l'oggetto che arriva si chiama "props" e contiene "selezionaApi" che vale jokeType (ad esempio 1). React quindi in "background" fa questo: selezionare l'oggetto "props", cercare il nome (chiave) "selezionaApi" e creare una variabile locale con lo stesso nome e che contenga lo stesso valore (ad esempio 1 nel caso di SeeTenJokes)
    /**qui viene usata la destrutturazione: significa che dall'oggetto "props" che arriva da SeeTenJokes
     * viene estratto il valore che viene indicato "selezionaApi" per venire poi usato per selezionare 
     * la corretta chiamata API da eseguire.
     */ 

        let API:string; //variabile per contenere l'API, ovvero contiene (obbligatoriamente) una stringa (che è il "link" dell'API) che verrà poi passato alla funzione "fetch"

        //scelta dell'API da utilizzare in base al valore ricevuto come props 
        if (selezionaApi === 1){ 
            API = "https://official-joke-api.appspot.com/jokes/programming/ten";
        } else if (selezionaApi === 2){ 
            API = "https://official-joke-api.appspot.com/jokes/general/ten"  
        } else if (selezionaApi === 3){ 
            API = "https://official-joke-api.appspot.com/jokes/knock-knock/ten"
        } else if (selezionaApi === 4){ 
            API = "https://official-joke-api.appspot.com/jokes/dad/ten"
        }


        /**Recuperare i dati dell API usando la libreria React Query
         * 
         * Come funziona useQuery:
         * 1) Controlla in cache se sono già presenti dei dati con l'etichetta "jokes"
         *      Sono dati non scaduti (ovvero presenti da "non troppo tempo")? Se si, evita di fare la fetch e restituisce quei dati "cachati"
         *                                                                     Se no, fa partire la queryFn la quale a sua volta fa la fetch
         * 2) Se viene eseguita la fetch, React imposta isLoading a true (e apparirà qualunque cosa sia stata implementata dentro isLoading) e chiede i dati al server
         * 3) Se i dati arrivano, li mostra, li salva in cache (con la relativa etichetta "jokes") e imposta isLoading a false.
         *      Se non arrivano, imposta lo stato ad error e isLoading a false.
         * 
         * 
         * data: dove vengono inseriti i dati ottenuti dalla fetch (o dalla cache)
         * isLoading: variabile booleana che è true solo durante il primo fetch (usata nella maggiorparte dei casi per mostrare un messaggio di caricamento)
         * isFetching: variabile booleana che è true ogni volta che viene fatta una fetch, anche se ci sono già dei dati in cache
         * error: oggetto che contiene l'oggetto di tipo error se la fetch non va a buon fine
         * 
         * 
         */
        const {data, isLoading, isFetching, refetch, error} = useQuery<TJoke>({ //
            queryKey: ["jokes"],  //nome che serve a react per identificare quel tipo di dato nella cache
            queryFn: async ()  => await fetch(API).then(data=>data.json())   //queryFn: la "parte" della Hook useQuery che contiene "cosa deve fare veramente" la useQuery (in questo caso fare una fetch)
        });                             //fetch è una funzione che restituisce una promise: significa che restituisce una "promessa" che prima o dopo i dati (nel caso desiderato) arriveranno; tuttavia i dati potrebbero anche non arrivare, ecco perchè bisogna gestire anche il caso di errore.
                                        //await è un operatore che è legato alla async e ferma l'esecuzione del codice finchè la promise (fetch) non da un risultato, indipendentemente che sia negativo o positivo.
        
        
         
        
        //GESTIONE ERRORI:
        //Ora che ho i dati della fetch, gestisco i vari casi
        
        //Caso in cui i dati stanno caricando per la prima volta
        if (isLoading == true){
            return(
                <>
                    <h2>Pagina in caricamento...</h2>
                    <img src="src\assets\rotellaLoading.gif" alt="Caricamento" />
                </>
            )
        }

        //Caso in cui i dati si stanno aggiornando (ad esempio se l'utente ritorna sulla pagina dopo alcuni minuti)
        if (isFetching == true){
            return(
                <>
                    <h2>Aggiornamento dei dati in corso...</h2>
                    <img src="src\assets\rotellaLoading2.gif" alt="Aggiornamento" />
                </>
            )
            
        }
        
        //Caso in cui non arrivano i dati
        if (error){
            return(
                <>
                    <h2>Errore nel caricamento dei dati: {error.message}</h2>
                    
                </>
            )
        }
          
        //Elemento che viene "dato in output", ovvero quello che viene esportato ed utilizzato nelle altre pagine ("SeeTenJokes.tsx")
        return(
            <>  
                <div>
                    <ol> 
                        {data && data.map((joke: IJoke) => (
                            //It's basically saying: "For this joke, give me back this <li> element."
                            <li key={joke.id}>{joke.setup} {joke.punchline}</li>   //il .map è una funzione che permette di trasformare ogni singolo elemento restituito dala fetch in un "elemento" HTML, così che possa essere visualizzato sulla pagina
                            //ovvero, per ogni elemento dell' array "Jokes" (quello riempito con i risultati della fetch) crea un List Item (<li>) usando id come chiave (ovvero un identificativo di quell'elemento) e mostrando il testo del joke. 

                            // joke --> The individual "thing" currently being handled.
                            // <li ...>...</li> --> What you want to transform the "thing" into.
                        ))}               
                    </ol>

                    <button id="LNB" onClick = { () => refetch()} >Leggi nuove battute </button> 
                    {
                        /** Refetch è una funzione della libreria React Query che forza solo il ri-caricamento dell'API, 
                         * non dell'intera pagina del browser, basandosi sull'aspetto principale di React, ovvero quello di aggiornare
                         * solo i dati che devono effettivamente cambiare e non l'intera pagina.                  
                         */
                    }

                </div>
            </>
            )
        }

export default JokeList;