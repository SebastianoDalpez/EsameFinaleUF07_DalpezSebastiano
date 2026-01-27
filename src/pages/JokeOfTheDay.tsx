import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import JokeList from '../components/JokeList';
import SingleJoke from '../components/SingleJoke'

function JokeOfTheDay(){
    const jokeType = 5;
     return(
        <>
        <h1>JOKE OF THE DAY</h1>

        <h2>Ecco il Joke di oggi </h2>

        <br />
        < SingleJoke/> 
        <br />
        <br />
        <Link to='/'>Ritorna alla Home</Link> 
        </>
    )

} 

export default JokeOfTheDay;