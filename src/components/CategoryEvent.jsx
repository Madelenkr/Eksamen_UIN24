import "../styles/categoryStyle.css";

export default function CategoryEvent({ event }) {
    const imageUrl = event.images?.[0]?.url;
    return (
      <article className="categoryCard">
        {imageUrl && <img src={imageUrl} alt={event.name} className="category-image" />}
        <h3>{event.name}</h3>
        <p>{event.dates?.start?.localDate}</p>
        <p>{event._embedded?.venues?.[0]?.name}</p>
        <button className="category-save-button"></button>
      </article>
    );
  }
  