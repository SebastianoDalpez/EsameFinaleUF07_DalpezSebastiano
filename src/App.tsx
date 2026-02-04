import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css'
import Home from './pages/Home';
import SeeTenJokes from './pages/SeeTenJokesProg';
import SeeTenJokesGeneral from './pages/SeeTenJokesGeneral';
import SeeJokesKK from './pages/SeeJokesKK';
import SeeJokesDad from './pages/SeeJokesDad';
import JokeOfTheDay from './pages/JokeOfTheDay';
import SendYourJoke from './pages/SendYourJoke';



/**
 * Il queryClient è l'elemento centrale che coordina tutte le query che vengono fatte 
 * all'interno dell'intero progetto ed ha 3 funzioni principali: 
 * 1) Gestire la cache: ad ogni fetch, salva i dati nella cache e gli etichetta (in questo caso "jokes")
 * 2) Contiene la configurazione di tutte le query, così da non dover configurare "manualmente" ogni query
 * 3) Gestisce (in questo caso) anche il comportamento in caso di errori: quante volte riprovare e
 *    quanto tempo aspettare tra un tentativo e l'altro ("retry" e "retryDelay")
*/
const client = new QueryClient({   
  defaultOptions: {
      queries: {
        retryDelay: 1000,
        retry: 4
      }
  }
});


function App() {
  return (
    <>
      <QueryClientProvider client={client}> 
          {/**
           * QueryClientProvider è un tag che:
           * 1) permette ai componenti figli (useQuery) di parlare con il 
           *    client (QueryClient).
           * 2) distribuire le informazioni di configurazione ("retry" e "retryDelay") a tutti i componenti figli,
           *    e dare loro la possibilità di accedere alla cache gestita dal QueryClient, facendo quindi la funzione di "Provider" 
           */
          }

        <header id="banner">
          <h1 id="mainTitle">JOKE.COM</h1>
        </header> 
        
        
        <BrowserRouter>
          {/**
           * Tutti gli elementi messi dentro il tag "<Routes>" scompaiono quando si accede ad un altra pagina
           * Al contrario, tutti gli elementi messi fuori dal tag "<Routes>" rimangono visibili in tutte le pagine
           */
          }
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pages/SeeTenJokesProg' element={<SeeTenJokes />}/>
          <Route path='/pages/SeeTenJokesGeneral' element={<SeeTenJokesGeneral />}/>
          <Route path='/pages/SeeJokesKK' element={<SeeJokesKK />}/>
          <Route path='/pages/SeeJokesDad' element={<SeeJokesDad />}/>
          <Route path='/pages/JokeOfTheDay' element={<JokeOfTheDay />}/>
          <Route path='/pages/SendYourJoke' element={<SendYourJoke />}/>
        </Routes>

        </BrowserRouter>
        <footer id="mainFooter">
          <h3 id="textFooter">made by Sebastiano Dalpez</h3>
        </footer>
      </QueryClientProvider>

      
      </>
  );
 }
 export default App