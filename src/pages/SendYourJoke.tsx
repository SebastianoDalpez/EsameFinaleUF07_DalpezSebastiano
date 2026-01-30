import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import CreateYourJoke from '../components/CreateYourJoke';




function SendYourJoke(){
     return(
        <>
        <h1>INVIA IL TUO JOKE:</h1>
        <br />
        < CreateYourJoke/>
        <br />
        <br />
        <Link to='/'>Ritorna alla Home</Link>
        </>
    )
}
export default SendYourJoke;