// Henter import av css styling for CityCard
import "../styles/cityCard.css";

// Gir koden en export og har lagt inn en prop som heter fetchPlace
export default function CityCard({ fetchPlace }) {

    // Henter første bilde fra fetchPlace-objektet, hvis det finnes
  const imageUrl = fetchPlace?.images?.[0]?.url;

    return (
        <section className="city-card"> {/* Oppretter en seksjon for kortet */}
            {imageUrl && <img src={imageUrl} alt={fetchPlace.name} className="city-image"/>} {/* Skriver ut bilde fra API-et i CityCard  */}
            <h2 className="city-card-h2">{fetchPlace.name}</h2> {/* Henter ut navnet og legger det til i en <h2>-tag */}
            <article className="city-card-section"> {/* Oppretter en artikkel for informasjonen som blir hentet til kortet */}
            <p>Dato: {fetchPlace.dates?.start?.localDate}</p> {/* Henter ut dato fra API */}
            <p>Tid: {fetchPlace.dates?.start?.localTime}</p> {/* Henter ut tid fra API */}
            <p>Plass: {fetchPlace._embedded?.venues?.[0]?.name}</p> {/* Henter ut plassen/spillested fra API */}
            <p>Adresse: {fetchPlace._embedded?.venues?.[0]?.address?.line1}</p> {/* Henter ut adressen av spillestedet fra API */}
            </article>
        </section>
    );
}