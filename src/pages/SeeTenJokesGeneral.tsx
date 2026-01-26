import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import JokeList from '../components/JokeList';
import '../Index.css';

function SeeTenJokesGeneral(){
    const jokeType = 2;
    return(
        <>
        <h1>Qui puoi trovare varie battute e barzellette su argomenti generali</h1>

        <h2>Ecco 10 battute su l'argomento General </h2>

        <br />
        
        <JokeList selezionaApi={jokeType}/> {/**importo il componente "JokeList" il quale restituisce una lista con 10 "jokes" */}
        <br />
        <br />
        <Link to='/'>Ritorna alla Home</Link> 
        </>
    )
}


export default SeeTenJokesGeneral;