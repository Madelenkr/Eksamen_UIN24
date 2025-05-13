import { Link } from "react-router-dom";
import "../styles/layout.css"; 

export default function Layout({ children }) {
    return (
        <>
            <header>
            <Link to="/" id="logo">BillettLyst</Link>
                <nav>
                    <ul>
                        <li><Link to="/category/musikk">Musikk</Link></li>
                        <li><Link to="/category/sport">Sport</Link></li>
                        <li><Link to="/category/teater_show">Teater/Show</Link></li>
                    </ul>
                </nav>
<<<<<<< Updated upstream
            <Link to="/dashboard" id="logg">Logg inn</Link>
=======
                    {!isLoggedIn && (
                    <Link to="/dashboard" id="logg" className="Logg-inn-layout">Logg inn</Link>
                    )}
>>>>>>> Stashed changes
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p></p>
            </footer>
        </>
    );
}