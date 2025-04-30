import { Link } from "react-router-dom";

export default function EventPage({festival}) {

    return (
        <article>
        <h2>{festival.name}</h2>
        <Link to={festival.id}>Les mer {festival.name}</Link>
      </article>
    );
}