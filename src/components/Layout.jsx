import { Link } from "react-router-dom";


export default function Layout({ children }) {
    return (
        <>
            <header>
            <Link to="/" id="logo">BillettLyst</Link>
                <nav>
                    <ul>
                        <li><Link to="/category/musikk">Musikk</Link></li>
                        <li><Link to="/category/sport">Sport</Link></li>
                        <li><Link to="/category/teather-show">Teater/Show</Link></li>
                    </ul>
                </nav>
            <Link to="Dashboard/" id="logg">Logg inn</Link>
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