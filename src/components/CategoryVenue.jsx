import "../styles/categoryStyle.css";

export default function CategoryVenue({ venue }) {
    const imageUrl = venue.images?.[0]?.url;
  
    return (
      <article className="categoryCard">
        {imageUrl && <img src={imageUrl} alt={venue.name} className="category-image" />}
        <h3>{venue.name}</h3>
        <p>{venue.address?.line1}, {venue.city?.name}</p>
      </article>
    );
  }
  