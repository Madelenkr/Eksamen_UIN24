import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //Henter parametere fra URLen 
import "../styles/sanityEventPage.css"; // Importer CSS for styling
import Layout from "./Layout"; // Importer Layout inn i EventPage. Selvom den er gråa ut er den fortsatt i bruk og påvirker EventPage

//Hovedkomponenten for SanityEventPage
export default function SanityEventPage() {
const { id } = useParams(); //Henter id fra URLen
const [ event, setEvent ] = useState(null);
const [relatedUsers, setRelatedUsers] = useState([]);


  //Henter data fra APIen ved hjelp av id fra URLen
  useEffect(() => {
        fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&`)
          .then((response) => response.json()) //Omstrukturerer til json format.
          .then((data) => setEvent(data)) //statevariabel 
          .catch((error) =>
            console.error("feil under henting fra API", error) //Feilmelding
          );
      }, [id]); //Legger til id som avhengighet for å oppdatere data når id endres


  // Hent brukere fra Sanity
  useEffect(() => {
    if (!id) return;

    // Først: finn event-dokumentet med riktig apiId
    const query = `*[_type == "event" && apiId == "${id}"][0]._id`;

    fetch(`https://eqbspp1a.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then(({ result: eventRefId }) => {
        if (!eventRefId) return;

        const userQuery = `*[_type == "user" && (
          "${eventRefId}" in wishlist[]._ref || "${eventRefId}" in previousPurchases[]._ref
        )] {
          _id,
          name,
          username
        }`;

        return fetch(`https://eqbspp1a.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(userQuery)}`);
      })
      .then(res => res?.json())
      .then(data => {
        if (data?.result) {
          setRelatedUsers(data.result);
        }
      })
      .catch(error => console.error("Feil ved henting av brukere", error));
  }, [id]);

  return (
    <>
    <section className="sanity-event-section">
        <article className="sanity-event-article">
            {event && event.images && event.images.length > 0 && (
            <img src={event.images[0].url} alt={event.name} className="sanity-event-image"/>
            )}
            <h2 className="sanity-event-h2">{event?.name}</h2>
            <p className="sanity-event-p">Dato: {event?.dates?.start?.localDate}</p>
            <p className="sanity-event-p">Tema: {event?.classifications?.[0]?.genre?.name}</p>
            <p className="sanity-event-p">Plass: {event?._embedded?.venues?.[0]?.name}</p>
        </article>
    </section>
    <section className="user-list-section">
        <h3>Brukere med dette arrangementet</h3>
        {relatedUsers.length === 0 ? (
          <p>Ingen brukere har dette arrangementet på ønskelisten eller som tidligere kjøp.</p>
        ) : (
          <ul>
            {relatedUsers.map((user) => (
              <li key={user._id}>{user.name} ({user.username})</li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}