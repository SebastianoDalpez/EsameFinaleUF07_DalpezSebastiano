import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';


function Home() {
    return(
    <>  
    
        <h1>Se vuoi divertirti sei nel posto giusto!</h1>
        <p>Benvenuto nel mio sito!</p>
        <br/>
        <Link to='/pages/SeeTenJokes'>Fatti una risata </Link>
    </>
    )
}

export default Home;
