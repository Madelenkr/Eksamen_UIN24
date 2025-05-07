import "../styles/categoryStyle.css";

export default function CategoryAttraction({ event }) {
    const imageUrl = event.images?.[0]?.url;
  
    return (
      <article className="categoryCard">
        {imageUrl && <img src={imageUrl} alt={event.name} className="category-image" />}
        <h3>{event.name}</h3>
        <p>{event.classifications?.[0]?.genre?.name}</p>
        <p>{event._embedded?.venues?.[0]?.name}</p>
      </article>
    );
  }
  