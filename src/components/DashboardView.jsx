import "../styles/dashboard.css"; 
import {client} from "../sanity/client";
import { useEffect, useState } from "react";



export default function DashboardView({ username, onlogout }) {
   
    return (
        <section className="dashboard">
            <article>
                <h3 className="dashboard-title">Min side</h3>
            </article>


            <nav className="dashboard-nav" aria-label="Min navigasjon">
            <ul className="dashboard-nav-liste">
                <li className="dashboard-nav-item1"><a href="#">Venner</a></li>
                <li className="dashboard-nav-item2" ><a href="#">Min kjøp</a></li>
                <li className="dashboard-nav-item3"><a href="#">Min ønskeliste</a></li>
            </ul>
            </nav>
            

            <section className="logout-section">
             <button onClick={onlogout} className= "logout-button"> Logg ut</button>
            </section>



        </section>
        
    );
}
