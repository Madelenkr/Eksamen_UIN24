import "../styles/cityCard.css"; // Importer CSS-modulen

export default function CityCard({fetchPlace}) {
  const imageUrl = fetchPlace?.images?.[0]?.url; // Henter første bilde, hvis det finnes

    return (
        <article className="city-card">
            {imageUrl && <img src={imageUrl} alt={fetchPlace.name} className="city-image"/>}
            <h2 className="city-card-h2">{fetchPlace.name}</h2>
        </article>
    );
}