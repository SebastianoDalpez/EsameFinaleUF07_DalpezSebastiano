import { useQuery } from "@tanstack/react-query"
import type {IJoke, TJoke} from '../interfaces/jokeInterface';
import { useState } from "react";

//è stato creato un altro componente perchè JokeList funziona solo con un vettore di oggetti (.map) e non con oggetti singoli 

let a:number = Math.round(Math.random() * (365 - 0) + 0);
/**genera numero casuale tra 0 e 365 così da avere un Joke diverso "ogni giorno"
 * Generando il numero causale al di fuori del "componente vero e proprio" non viene rigenerato ad ogni render
 * ma rimane tale, fino a che la pagina non viene chiusa e riaperta o fino a che non viene aggiornata l'intera scheda
 * del browser, simulando il fatto che quel Joke rimanga per quella giornata.
 * Il numero random qui generato e poi concatenato alla stringa dell'API rappresenta l'ID del joke nel server di 
 * "official-joke-api"
 */

function SingleJoke(){
    let b:string = a.toString() //trasformo il numero in stringa così da poterlo concatenare all API
    
    //Concateno il numero generato al "Link" dell'API così che mi venga restituito il joke con l'Id corrispondente al numero generato (esempio: generato 23 --> restituito joke.Id = 23)
    const API:string = `https://official-joke-api.appspot.com/jokes/` + b

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
    const {data, isLoading, isFetching, error} = useQuery<IJoke>({ //
        queryKey: ["jokeOTD"],  
        queryFn: async () => await fetch(API).then(data=>data.json())   
    });     

    if (isLoading == true){
        return(
            <>
                <h2>Pagina in caricamento...</h2>
                <img src="src\assets\rotellaLoading.gif" alt="Caricamento" />
            </>
        )
    }

    //GESTIONE ERRORI E CASISTICHE:
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

    return (
        <>
            {/** la keyword "?" permette a react di riempire quei 2 campi ("setup" e "punchline") con "undefined" nei momenti in cui i dati non sono neancora arrivati o non sono disponibili, evitando di mandare la pagina in errore (Optional Chaining) */}
            <p>{data?.setup}</p>  
            <p>{data?.punchline}</p>
        </>
    )
}

export default SingleJoke; 