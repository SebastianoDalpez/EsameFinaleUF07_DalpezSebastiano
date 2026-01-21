import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import JokeList from '../components/JokeList';

function SeeTenJokes(){
    
    return(
        <>
        <h1>Qui puoi trovare varie battute e barzellette brevi su ambiti random</h1>
        <JokeList /> {/**importo il componente "JokeList" il quale restituisce una lista con 10 "jokes" */}
        <Link to='/'>Ritorna alla Home</Link> 
        {//aggiungere possibilità di selezionare tipo di Joke
        }
        </>
    )
}

export default SeeTenJokes;