import "../styles/artistCard.css";
import Home from "./Home";

export default function ArtistCard({ artist }) {
  return (
    <article>
      {attraction?.map((pass) => {
        const artists = pass._embedded?.attractions;
        return (
          <article>
              <h2>{artists.name}</h2>
          </article>
        );
      })}
    </article>
  );
}