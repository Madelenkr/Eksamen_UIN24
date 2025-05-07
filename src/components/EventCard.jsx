import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/eventCard.css"; // Importer CSS-modulen

export default function EventCard({festival}) {
  const imageUrl = festival?.images?.[0]?.url; // Henter første bilde, hvis det finnes

    return (
        <article className="event-card">
        {imageUrl && <img src={imageUrl} alt={festival.name} className="festival-image"/>}
        <h2 className="event-card-h2">{festival.name}</h2>
        <Link to={`/event/${festival.id}`} className="event-link">Les mer {festival.name}</Link>
      </article>
    );
}