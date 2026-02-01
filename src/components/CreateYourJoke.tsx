import { useQuery } from "@tanstack/react-query"
import {useEffect, useState, type FormEvent} from "react";


async function invio(type:string, setup: string, punchline: string, id: number) {
    // {/**CHIAMATA API POST */}
    console.log("tasto premuto");
    const res =  await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {"Content-Type" : "application/json"},  //specifica al server di destinazione il formato dei dati che arriveranno
        body: JSON.stringify({type: type, setup: setup, punchline: punchline, id: id}) //contiene i dati che vengono effettivamente inviati al server (il payload)
    })

    //GESTIONE ERRORI E CASISTICHE:
    //controllo dell'arrvo dei dati al server e gestione degli errori della chiamata POST
    if (res.ok) {
        const datiRicevuti = await res.json();
        console.log("Il server ha ricevuto i dati:", datiRicevuti);
        alert("Joke inviato con successo");
    } else {
        console.error("Errore nell'invio:", res.status);
    }
}
 
function CreateYourJoke(){
    //4 useState per ogni campo così che vengano salvate nella cache e non vengano "azzerate" ad ogni render
    const [type, setType] = useState("");
    const [setup, setSetup] = useState("");
    const [punchline, setPunchline] = useState("");
    const [id, setId] = useState(1);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();  //funzione per evitare che avvenga il refresh della pagina 
        invio(type, setup, punchline, id);
    }

    return(
        <>  
            {/** dentro la form vengono presi i dati appena immessi dall'utente tramite "e.target.value" e vengono passati alla funzione setType/setSetup ecc... che "scrivono" il nuovo dato dentro la variabile di stato relativa a quel valore  */}
            <h1>Inserisci la tua battuta: </h1>
            {/** è stata utilizzata una select per evitare che l'utente inserisca valori non coerenti nel campo relativo alla tipologia di joke*/}
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="categoriaJoke"> Seleziona tipologia 
                <select id="categoriaJoke" value={type}  onChange={(e) => setType(e.target.value)}> 
                    <option value="General">Generici</option>
                    <option value="Programming">Programmazione</option>
                    <option value="Knock-Knock">Knock-Knock</option>
                    <option value="Dad">Dad</option>
                </select>
                </label>
                <label> Setup: <input type="text" name="setup" value={setup} onChange={(e) => setSetup(e.target.value)}/> </label> 
                <label> Punchline: <input type="text" name="punchline" value={punchline} onChange={(e) => setPunchline(e.target.value)}/> </label>
                <label> id: <input type="number" name="id" value={id} onChange={(e) => setId(Number(e.target.value))} /> </label>  {/** usato Number(...) perchè i valori che arrivano dagli input HTML sono sempre in formato di stringa, mentra in questo campo è richiesto un numero */}
                {/** value è l'elemento che permette di collegare il testo immesso dall'utente e la variabile di stato. 
                 *   onChange è una funzione che si attiva ogni volta che l'utente preme un tasto o cancella una lettera. 
                 *   "e" è un oggetto (generato automaticamente dal browser) che serve al browser per capire in che campo si trova l'utente e quale tasto preme: contiene tutte le informazioni su ciò che è appena successo (un clic, la pressione di un tasto, ecc...) 
                 *   .target rappresenta l'elemento che ha fatto "nascere" l'oggetto "e". È il riferimento fisico (come un "puntatore") all'elemento HTML che ha generato l'evento "e", come una casella "<input>" o l'elemento "<select>" 
                 *   .value contiene il valore contenuto (in quel momento) dall'elemento che è "puntato" dal riferimento .target. Se è un input di testo (come "setup", "punchline", "id"), sono i caratteri scritti; mentre se è un dropdown (come per "type"), è l'opzione selezionata.
                 *   setSetup è la funzione della useState (ad esempio di setup) che inserisce il nuovo valore dentro la variabile di stato
                 *   */}
                <button type="submit">INVIA</button>
            </form>
           
        </>
    )
}
export default CreateYourJoke;