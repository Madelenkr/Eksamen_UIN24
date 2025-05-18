import "../styles/dashboard.css"; 
import { client } from "../sanity/client";
import { useEffect, useState } from "react";
import EventLink from "./EventLink";

// Viser innholdet på siden etter innlogging
export default function DashboardView({ onLogout }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // GROQ-spørring, som henter data fra sanity
    const query = `*[_type == "user"]{name, age, gender, profileImage {asset -> }, wishlist[]->{event, apiId, description},previousPurchases[]->{event ,apiId, description}}`;

    client.fetch(query).then(async (userData) => {
            // Mapper hver bruker og henter eventdata fra Ticketmaster for ønskeliste og kjøp
        setUsers( await Promise.all (userData.map(async (user) => {
            const fetchEvents = async (eventList) => 
            Promise.all((eventList || []).map(async (event) => {
              //Med try-catch blok for å håndteree feil melding så vi ungår å stoppe koden eller få feil melding. 
                try{ 
                    // Henter eventdetaljer fra Ticketmaster API
                    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/attractions/${event.apiId}.json?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2`);
                    const data = await response.json();
                    return {id: event.apiId, name: data.name || event.event, description: event.description, images: data.images ||[]};
                }catch{
                   // Hvis hentingen feiler, så brukes data fra Sanity
                  return {id: event.apiId, name: event.event, description: event.description , images: []};
                }
            }));
            return {
                ...user,
                wishlist: await fetchEvents(user.wishlist),
                previousPurchases: await fetchEvents(user.previousPurchases),
            };
        })
    )
    );
});
}, []);






  return (
    <section className="dashboard">
      <article>
        <h3 className="dashboard-title">Min side</h3>
      </article>
      <nav className="dashboard-nav" aria-label="Min navigasjon">
        <ul className="dashboard-nav-liste">
          <li className="dashboard-nav-item"><a href="#">Venner</a></li>
          <li className="dashboard-nav-item"><a href="#">Min kjøp</a></li>
          <li className="dashboard-nav-item"><a href="#">Min ønskeliste</a></li>
        </ul>
      </nav>
      <section className="user-list">
        {users.map((user, i) => (
          <article key={i} className="user-card">
            <h2 className="user-card-name">{user.name}</h2>
            {user.profileImage && (
              <img src={user.profileImage.asset.url} className="user-card-image"/>
            )}
            <p className="user-card-p">Alder: {user.age}</p>
            <p className="user-card-p">Kjønn: {user.gender}</p>
            <section className="user-card-wishlist">
                <h3 className="user-card-h3">Ønskeliste</h3>
                {user.wishlist.map((event, j) => (
                  <EventLink key={j} festival={event} />
                ))}
            </section>
            <section className="user-card-purchases">
              <h3 className="user-card-h3">Kjøp</h3>
                {user.previousPurchases.map((event, j) => (
                  <EventLink key={j} festival={event} />
                ))}
            </section>
          </article>
        ))}
      </section>
      <section>
        <button onClick={onLogout} className="logout-button">Logg ut</button>
      </section>
    </section>
  );
}
