import { Link } from "react-router-dom";
export default function EventLink({ festival }) {
    return (
        <li className="arrangement-linke">
            <article className="arrangement-kort">
                <h3>{festival.name}</h3>
                <Link to={`/event/${festival.id}`} className="les-mer-lenke">
                     Se mer om dette kjøpet
                 </Link>
            </article>
        </li>
    );
}  