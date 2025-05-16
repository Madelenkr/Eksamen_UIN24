import { useState, useEffect } from "react";
import "../styles/categoryStyle.css"; //import av CSS for styling


// komponent for å vise eventer
export default function CategoryEvent({ event }) {
    const [saved, setSaved] = useState(false); //state for å djekke om event er lagret
    const imageUrl = event.images?.[0]?.url; //Henter bilde fra API om det er tilgjengelig


    //kode for å lagre i localstorage har vært laget med hjelp av ChatGPT 
  const storageKey = "savedEvents"; //id for lagring (event.id)

  // Hent lagrede eventer fra localStorage ved lasting
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem(storageKey)) || []; //henter lagrede event id fra storage
    if (savedEvents.includes(event.id)) {
      setSaved(true); //oppdaterer state hvis event id er lagret
    }
  }, [event.id]);
  
  // Funksjon for å lagre eller fjerne eventer fra localStorage
  const handleSaveClick = () => {
    const savedEvents = JSON.parse(localStorage.getItem(storageKey)) || [];

    let updatedSavedEvents;
    if (saved) {
      updatedSavedEvents = savedEvents.filter(id => id !== event.id); //fjerne fra lagret event
    } else {
      updatedSavedEvents = [...savedEvents, event.id]; //legger til i lagrede events
    }

    // Oppdaterer localStorage med de lagrede eventene
    localStorage.setItem(storageKey, JSON.stringify(updatedSavedEvents));
    setSaved(!saved);
  };

    return (
      <article className="categoryCard"> {/*Kort for en event*/}
        {imageUrl && <img src={imageUrl} alt={event.name} className="category-image" />} {/*Bilde for en event (Hvis det finnes)*/}
        <h3>{event.name}</h3> {/*Navn på event*/}
        <p>{event.dates?.start?.localDate}</p> {/*Viser dato til event*/}
        <p>{event._embedded?.venues?.[0]?.name}</p> {/*Viser navn på venue om tilgjengelig*/}
        
        {/*Lagringsknapp msom viser om event er lagret eller ikke */}
        <button 
        className={`category-save-button ${saved ? "saved" : ""}`}
        onClick={handleSaveClick}
      >
        <img
          src={saved ? "/heartfull.png" : "/heartempty.png"} //bilde av hjertet basert på lagret eller ikke lagret
          alt={saved ? "Lagret" : "Lagre"} //alt tekst for bilde av hjerte
          className="heart-icon"
        />
      </button>
      </article>
    );
  }
  