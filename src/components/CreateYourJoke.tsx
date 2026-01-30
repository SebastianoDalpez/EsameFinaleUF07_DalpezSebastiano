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

    //controllo dell'arrvo dei dati al server
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
            <h1>Inserisci la tua battuta: </h1>
            <form action="" onSubmit={handleSubmit}>
               <label> Tipo (general, programming, kk, dad): <input type="text" name="type" value={type} onChange={(e) => setType(e.target.value)} /> </label>
               <label> Setup: <input type="text" name="setup" value={setup} onChange={(e) => setSetup(e.target.value)}/> </label>
               <label> Punchline: <input type="text" name="punchline" value={punchline} onChange={(e) => setPunchline(e.target.value)}/> </label>
               <label> id: <input type="number" name="id" value={id} onChange={(e) => setId(Number(e.target.value))} /> </label>
            <button type="submit">INVIA</button>
            </form>
           
        </>
    )
}
export default CreateYourJoke;