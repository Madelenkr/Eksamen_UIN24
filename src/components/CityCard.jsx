export default function CityCard({fetchPlace}) {
  const imageUrl = fetchPlace?.images?.[0]?.url; // Henter første bilde, hvis det finnes

    return (
        <article>
            {imageUrl && <img src={imageUrl} alt={fetchPlace.name}/>}
            <h2>{fetchPlace.name}</h2>
        </article>
    );
}