import { Link } from "react-router-dom";
export default function EventLink({ festival }) {
    return (
        <li className="event-li">
            <article className="event-info">
                <h3>{festival.name}</h3>
                <p className="event-description">{festival.description}</p>
                <Link to={`/sanity-event/${festival._id}`} className="les-mer-lenke">
                     Les mer
                 </Link>
            </article>
        </li>
    );
}  