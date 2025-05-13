import "../styles/categoryStyle.css";

export default function CategoryVenue({ venue }) {
   
  
    return (
      <article className="categoryCard-venue">
        <h3>{venue.name}</h3>
        <p>{venue.address?.line1} {venue.city?.name}</p>
      </article>
    );
  }
  