<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``` -->

Progetto Esame: Joke.com



DESCRIZIONE E SCOPO DEL PROGETTO:
Joke.COM è una Single Page Application (SPA) realizzata con React e TypeScript. Lo scopo è gestire la visualizzazione di battute tramite API esterne e permettere l'invio di nuovi contenuti (nuove battute) attraverso un form dedicato.



ISTRUZIONI PER L'INSTALLAZIONE E L'ESECUZIONE:
Scaricare la repository del progetto.

Installare le dipendenze: npm install.

Avviare il server locale: npm run dev.

Aprire il browser all'indirizzo indicato (es. http://localhost:5173).



DESCRIZIONE DELL' API UTILIZZATA:
Lettura: Chiamate GET a endpoint pubblici per recuperare le battute. Ogni chiamata restituisce un oggetto di tipo Joke con 4 attributi: Type, Setup, Punchline ed Id
L'API dava la possibilità di ricevere varie tipologie di battute, e qui sono state implementate tutte, separate ognuna con una pagina dedicata.

Invio: Chiamate POST verso JSONPlaceholder per simulare l'invio di una propria battuta. L'utente deve inserire i 4 valori Type, Setup, Punchline ed Id per riempire un oggetto di tipo joke che verrà poi inviato al server di prova di JSONPlaceholder. 



CREDENZIALI E MOCK:
Credenziali: Nessuna credenziale/key richiesta.

Mock: Viene usato JSONPlaceholder per l'invio di dati; l'ID restituito dopo il POST è sempre 101 per confermare l'operazione, anche se l'id immesso nel form è diverso (ad esempio se l'utente inserisce come Id il valore 345, il server di JSONPlaceholder ignora quell'Id e lo imposta automaticamente a 101)




STRUTTURA DEL PROGETTO: 
App.tsx: Definizione delle rotte e del layout principale. Contiene inoltre anche il "QueryClient" per la coordinazione di tutte le chimate fatte con "ReactQuery" all'interno dell'intero progetto.

PAGINE:
Home.tsx: Dashboard con layout a card. Pagina principale che permette la navigazione verso tutte le altre.

SeeJokesDad.tsx, SeeJokesKK.tsx, SeeTenJokesProg.tsx, SeeTenJokesGeneral.tsx, JokeOfTheDay.tsx sono le pagine che permettono la visualizzazione delle varie categorie di Jokes. Tutte queste pagine (tranne "JokeOfTheDay.tsx" che utilizza un componente dedicato "SingleJoke.tsx" che restituisce un solo joke alla volta) utlizzano al loro interno lo stesso componente riutilizzabile "JokeList.tsx" che restituisce la lista di battute "personalizzate" per ogni pagina. Tutte, tranne "JokeOfTheDay.tsx", permettono di "ricaricare" l'API per ricevere nuovi dati.

SendYourJoke.tsx: pagina che "chiama" il componente "CreateYourJoke.tsx". I dati vengono inviati tramite la chiamata POST messa nel componente "CreateYourJoke.tsx".


COMPONENTI: 
JokeList.tsx è il componente (riutilizzabile) che restituisce una lista di battute; "l'argomento" di queste battute è determinato dal parametro (numerico) che si passa al componente: ogni pagina "padre" di JokeList è identificata da un numero (SeeTenJokesProg.tsx (1), SeeTenJokesGeneral.tsx (2), SeeJokesKK.tsx (3), SeeJokesDad.tsx (4)) e quando chiama il figlio "JokeList.tsx" passa anche quel parametro numerico. Dentro "JokeList.tsx" viene poi selezionata l'API da eseguire in base al parametro ricevuto, associando ad ogni parametro un API diversa.
Questo componente è riutilizzabile ed è usato il figlio di 4 componenti: "SeeJokesDad.tsx", "SeeJokesKK.tsx", "SeeTenJokesProg.tsx", "SeeTenJokesGeneral.tsx".

SingleJoke.tsx è il componente che ha lo stesso funzionamento ed obbiettivo di "JokeList.tsx" ma adattato per restituire un singolo oggetto joke invece che un vettore di oggetti joke; è il figlio di "JokeOfTheDay.tsx" e chiede al server un solo joke selezionando in base all'Id (generato causalmete ogni "giorno").

CreateYourJoke.tsx è il componente che permette l'invio (al server di "JSONPlaceholder") di un oggetto di tipo Joke il quale viene riempito con parametri scelti dall'utente. Utilizza una chiamata API di tipo "POST" e tramite un form "raccoglie" i dati dall'utente; è il componente figlio di "SendYourJoke.tsx".


INTERFACCIE:
jokeInterface.tsx: file contenente l'interfaccia e il Tipo per controllare e gestire gli oggetti di tipo Joke (TJoke e IJoke)




ELENCO FUNZIONALITÀ COMPLETATE:

REQUISITI MINIMI: 
Struttura base del progetto ( components/ , pages/ )                      V
Routing con almeno 2 pagine (es. lista e dettaglio)                       V
TypeScript base (interfacce per oggetti API, props tipizzate)             V
Una chiamata API utilizzando la libreria React Query con metodo GET e     V
visualizzazione dai dati ottenuti.                                        

REQUISITI AVANZATI: 
Struttura del progetto meglio articolata con Componenti riutilizzabili    V
e Tipi di dato separati per argomento ( Post , Photo , Cats )         

Chiamate API Avanzate:
  Una o più chiamate con gestione async/await                             V
  Una o più chiamate utilizzando la libreria React Query                  V
  (in totale 2 chiamate GET)  
  Una chiamata di tipo POST. (in totale 1 chiamata POST)                  V
  Ogni chiamata API deve avere una propria gestione degli errori.         V
  Documentazione del codice                                               V








