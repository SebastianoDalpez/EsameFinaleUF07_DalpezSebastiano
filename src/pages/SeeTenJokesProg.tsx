import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import JokeList from '../components/JokeList';
import '../Index.css';


function SeeTenJokes(){
    
    return(
        <>
        <h1>Qui puoi trovare varie battute e barzellette sulla programmazione</h1>

        <h2>Ecco 10 battute su l'argomento programming </h2>

        <br />
        
        <JokeList /> {/**importo il componente "JokeList" il quale restituisce una lista con 10 "jokes" */}
        <br />
        <br />
        <Link to='/'>Ritorna alla Home</Link> 
        </>
    )
}

export default SeeTenJokes;