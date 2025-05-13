import { Link, Outlet } from "react-router-dom";
import "../styles/layout.css"; 

export default function Layout({ children, isLoggedIn, setIsLoggedIn }) {
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
                    <Link to="/dashboard" id="logg" className="Logg-inn-layout">Logg inn</Link>
                    
            </header>
            <main>
                {children}
                <Outlet/>
            </main>
            <footer>
                <p></p>
            </footer>
        </>
    );
}