import "../styles/dashboard.css"; // Importer CSS-modulen


export default function DashboardView({ username, onLogout }) {
    return (
        <section className="dashboard">
<<<<<<< HEAD
            <article>
=======
            <header className="dashboard-header">
>>>>>>> 0aface1326f1668f24207d350110c145bcbb18c2
                <h4 className="dashboard-title">Min side</h4>
            </article>


            <nav className="dashboard-nav" aria-label='Min navigasjon'>
            <ul className="dashboard-nav-liste">
                <li className="dashboard-nav-item"><a href="#">Venner</a></li>
                <li className="dashboard-nav-item" ><a href="#">Min kjøp</a></li>
                <li className="dashboard-nav-item"><a href="#">Min ønskeliste</a></li>
            </ul>
            </nav>
        <section className="logout-section">
            <button onClick={onLogout} className= "logout-button"> Logg ut</button>
        </section>
        </section>
        
    );
}
