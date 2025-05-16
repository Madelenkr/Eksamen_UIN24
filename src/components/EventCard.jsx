import { Link } from "react-router-dom"; //importerer link for navigasjon
import "../styles/eventCard.css"; // Importer CSS for styling

//komponent for å vise et kort for en festival/event
export default function EventCard({festival}) {
  const imageUrl = festival?.images?.[0]?.url; // Henter første bilde, hvis det finnes

    return (
        <article className="event-card"> {/* Kort for en festival */}
        {imageUrl && <img src={imageUrl} alt={festival.title} className="festival-image"/>} {/* Bilde for festival (hvis det finnes) */}
        <h2 className="event-card-h2">{festival.name}</h2>  {/* Navn på festival */}
        <Link to={`/event/${festival.id}`} className="event-link">Les mer {festival.name}</Link> {/* Link til mer informasjon om festival */}
      </article>
    );
}