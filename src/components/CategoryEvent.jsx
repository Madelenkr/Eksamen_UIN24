import { useState, useEffect } from "react";
import "../styles/categoryStyle.css";

export default function CategoryEvent({ event }) {
    const [saved, setSaved] = useState(false);
    const imageUrl = event.images?.[0]?.url;


    //kode for å lagre i localstorage har vært laget med hjelp av ChatGPT 
  const storageKey = "savedEvents"; //id for lagring (event.id)

  // Hent lagrede eventer fra localStorage ved lasting
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem(storageKey)) || [];
    if (savedEvents.includes(event.id)) {
      setSaved(true);
    }
  }, [event.id]);
  
  const handleSaveClick = () => {
    const savedEvents = JSON.parse(localStorage.getItem(storageKey)) || [];

    let updatedSavedEvents;
    if (saved) {
      updatedSavedEvents = savedEvents.filter(id => id !== event.id); //fjerne fra lagret event
    } else {
      updatedSavedEvents = [...savedEvents, event.id]; //legger til i lagrede events
    }

    localStorage.setItem(storageKey, JSON.stringify(updatedSavedEvents));
    setSaved(!saved);
  };

    return (
      <article className="categoryCard">
        {imageUrl && <img src={imageUrl} alt={event.name} className="category-image" />}
        <h3>{event.name}</h3>
        <p>{event.dates?.start?.localDate}</p>
        <p>{event._embedded?.venues?.[0]?.name}</p>
        <button
        className={`category-save-button ${saved ? "saved" : ""}`}
        onClick={handleSaveClick}
      >
        <img
          src={saved ? "/heartfull.png" : "/heartempty.png"}
          alt={saved ? "Lagret" : "Lagre"}
          className="heart-icon"
        />
      </button>
      </article>
    );
  }
  