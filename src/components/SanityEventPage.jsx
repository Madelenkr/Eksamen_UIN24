import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //Henter parametere fra URLen 
import "../styles/sanityEventPage.css"; // Importer CSS for styling
import Layout from "./Layout"; // Importer Layout inn i EventPage. Selvom den er gråa ut er den fortsatt i bruk og påvirker EventPage

//Hovedkomponenten for SanityEventPage
export default function SanityEventPage() {
const { id } = useParams(); //Henter id fra URLen
const [ event, setEvent ] = useState(null);


  //Henter data fra APIen ved hjelp av id fra URLen
  useEffect(() => {
        fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&`)
          .then((response) => response.json()) //Omstrukturerer til json format.
          .then((data) => setEvent(data)) //statevariabel 
          .catch((error) =>
            console.error("feil under henting fra API", error) //Feilmelding
          );
      }, [id]); //Legger til id som avhengighet for å oppdatere data når id endres

  return (
    <>
    <section className="sanity-event-section">
        <article className="sanity-event-article">
            {event && event.images && event.images.length > 0 && (
            <img src={event.images[0].url} alt={event.name} className="sanity-event-image"/>
            )}
            <h2 className="sanity-event-h2">{event?.name}</h2>
            <p className="sanity-event-p">{event?.dates?.start?.localDate}</p>
            <p className="sanity-event-p">{event?.classifications?.[0]?.genre?.name}</p>
            <p className="sanity-event-p">{event?._embedded?.venues?.[0]?.name}</p>
        </article>
    </section>
    </>
  );
}