import { Link } from "react-router-dom";
export default function EventLink({ event }) {
    return (
        <li className="event-li">
            <article className="event-info">
                <h3>{event.name}</h3>
                <p className="event-description">{event.description}</p>
                <Link to={`/sanityEvent/${event.id}`} className="les-mer-lenke">
                     Les mer
                 </Link>
            </article>
        </li>
    );
}  