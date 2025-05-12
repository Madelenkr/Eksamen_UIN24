import React from 'react';
import "../styles/dashboard.css"; // Importer CSS-modulen


export default function DashboardView({ username, onlogout }) {
    return (
        <section className="dashboard">
            <header className="dahsboard-header">
                <h3 className="dashboard-title">Min side</h3>
            </header>


            <nav className="dashboard-nav" aria-label='Min navigasjon'>
            <ul className="dashboard-nav-liste">
                <li className="dashboard-nav-item"><a href="#venner" className="dashboard-nav-link">Venner</a></li>
                <li className="dashboard-nav-item" ><a href="#kjop" className="dashboard-nav-link">Min kjøp</a></li>
                <li className="dashboard-nav-item"><a href="#onskeliste" className="dashboard-nav-link">Min ønskeliste</a></li>
            </ul>
            </nav>
            <section className="logout-section">
            <button onClick={onlogout} className= "logout-button"> Logg ut</button>

        </section>
        </section>
        
    );
}
