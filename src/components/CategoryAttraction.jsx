import "../styles/categoryStyle.css"; //import av CSS for styling

// komponent for å vise attraksjoner
export default function CategoryAttraction({ event }) {
    //Henter bilde fra API om der er tilgjengelig
    const imageUrl = event.images?.[0]?.url;
  
    return (
      <article className="categoryCard"> {/*Kort for en attraksjon*/}
        {imageUrl && <img src={imageUrl} alt={event.name} className="category-image" />} {/*Bilde for en attraksjon (Hvis det finnes)*/}
        <h3>{event.name}</h3> {/*Navn på attraksjon*/}
        <p>{event.classifications?.[0]?.genre?.name}</p> {/*Viser sjanger om tilgjengelig*/}
        <p>{event._embedded?.venues?.[0]?.name}</p> {/*Viser navn på venue om tilgjengelig*/}
      </article>
    );
  }
  