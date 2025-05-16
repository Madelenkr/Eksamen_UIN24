import "../styles/categoryStyle.css"; //importering av CSS for styling

//komponent for å visning av et spillested/venue
export default function CategoryVenue({ venue }) {
  
    return (
      <article className="categoryCard-venue"> {/*Kort for en venue*/}
        <h3>{venue.name}</h3> {/*Navn på venue*/}
        <p>{venue.address?.line1} {venue.city?.name}</p> {/*Viser adresse og by om tilgjengelig*/}
      </article>
    );
  }
  