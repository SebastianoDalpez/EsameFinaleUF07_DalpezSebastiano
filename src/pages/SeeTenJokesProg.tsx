import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import JokeList from '../components/JokeList';
import '../Index.css';




function SeeTenJokes(){
    const jokeType:number = 1;
    return(
        <>
        <h1>Qui puoi trovare varie battute e barzellette sulla programmazione</h1>

        <h2>Ecco 10 battute su l'argomento programmazione: </h2>

        <br />
        
        <JokeList selezionaApi={jokeType} />  
        {/**
         * "selezionaApi" è la proprietà dentro l' oggetto "props" che viene inviato a JokeList che contiene tutti i valori 
         * con cui il componente padre "SeeTenJokes" vuole che il figlio "JokeList" "lavori", in questo caso il valore numerico 1.
         * Quindi a JokeList arriva un oggetto con questa struttura: 
         * const props = {
            selezionaApi=1
           };
         */
        }
        <br />
        <br />
        <Link to='/'>Ritorna alla Home</Link> 
        </>
    )
}

export default SeeTenJokes;