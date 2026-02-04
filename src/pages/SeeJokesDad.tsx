import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import JokeList from '../components/JokeList';
import '../Index.css';

function SeeJokesDad(){
    const jokeType = 4;
     return(
        <>
        <h1>Qui puoi trovare varie battute e barzellette su Dad Jokes</h1>

        <h2>Ecco 2 battute su l'argomento Dad Jokes </h2>

        <br />
        <JokeList selezionaApi={jokeType}/> {/**importo il componente "JokeList" il quale restituisce una lista con 10 "jokes" */}
        <br />
        <br />
        <Link to='/'>Ritorna alla Home</Link> 
        </>
    )

}
export default SeeJokesDad;