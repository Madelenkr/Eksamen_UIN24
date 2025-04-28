import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Hjem</Link></li>
                        <li><Link to="Dashboard/">Min side</Link></li>
                        <li><Link to="EventPage/">Arrangementer</Link></li>
                        <li><Link to="CategoryPage/">Kategori</Link></li>
                    </ul>
                </nav>
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