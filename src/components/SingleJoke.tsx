import { useQuery } from "@tanstack/react-query"
import type {IJoke, TJoke} from '../interfaces/jokeInterface';
import { useState } from "react";

//è stato creato un altro componente perchè JokeList funziona solo con un vettore di oggetti (.map) e non con oggetti singoli 

let a:number = Math.round(Math.random() * (365 - 0) + 0);
/**genera numero casuale tra 0 e 365 così da avere un Joke diverso "ogni giorno"
 * Generando il numero causale al di fuori del "componente vero e proprio" non viene rigenerato ad ogni render
 * ma rimane tale, fino a che la pagina non viene chiusa e riaperta o fino a che non viene aggiornata l'intera scheda
 * del browser, simulando il fatto che quel Joke rimanga per quella giornata.
 */

function SingleJoke(){
    // const [idJoke, setIdJoke]=useState(a);
    let b:string = a.toString() //trasformo il numero in stringa così da poterlo concatenare all API
    
    const API:string = `https://official-joke-api.appspot.com/jokes/` + b
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