import { Link } from "react-router-dom"; // Importerer Link fra React Router for navigasjon og routes
import "../styles/layout.css"; // Importerer CSS Styling for å få opp css på siden

//Definerer grunnstrukturen
export default function Layout({ children}) {
    return (
        <>
            <header>
                {/* Logo-lenke som tar brukeren til startsiden */}
                <Link to="/" id="logo">BillettLyst</Link>
                <nav>
                 {/* Navigasjonsmeny med lenker til dashboard og kategorier */}
                    <ul>
                        <li><Link to="/category/musikk">Musikk</Link></li>
                        <li><Link to="/category/sport">Sport</Link></li>
                        <li><Link to="/category/teater_show">Teater/Show</Link></li>
                        <li><Link to="/dashboard">Logg inn</Link></li>
                    </ul>
                </nav>               
            </header>
            {/* Hovedinnhold */}
            <main>
                {/* Viser innhold sendt som props, hvis aktuelt */}
                {children}
            </main>
            {/* Vises i bunnteksen*/}
            <footer>
                <p className="bottom-text">Event data hentet fra <a href="https://www.ticketmaster.com">Ticketmaster</a> API</p>
            </footer>
        </>
    );
};