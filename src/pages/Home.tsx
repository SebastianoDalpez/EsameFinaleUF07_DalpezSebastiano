import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import '../Index.css';


function Home() {
    return(
    <>  
    
        <h1>Se vuoi divertirti sei nel posto giusto!</h1>
        <p>Benvenuto nel mio sito!</p>
        <br/>
        <Link to='/pages/SeeTenJokesProg'>Fatti una risata (programming) </Link>
        <br />
        <Link to='/pages/SeeTenJokesGeneral'>Fatti una risata (general) </Link>
        <br />
        <Link to='/pages/SeeJokesKK'>Fatti una risata (Knock-knock) </Link>
        <br />
        <Link to='/pages/SeeJokesDad'>Fatti una risata (Dad ) </Link>
        <br />
        <Link to='/pages/JokeOfTheDay'>JOKE OF THE DAY </Link>
    </>
    )
}

export default Home;
