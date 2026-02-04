import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import JokeList from '../components/JokeList';
import '../Index.css';

function SeeJokesKK(){
    const jokeType = 3;
     return(
        <>
        <h1>Qui puoi trovare varie battute e barzellette di tipo Knock-knock</h1>

        <h2>Ecco 5 battute di tipo Knock-Knock: </h2>

        <br />
        
        <JokeList selezionaApi={jokeType} /> {/**importo il componente "JokeList" il quale restituisce una lista con 10 "jokes" */}
        <br />
        <br />
        <Link to='/'>Ritorna alla Home</Link> 
        </>
    )

}
export default SeeJokesKK;