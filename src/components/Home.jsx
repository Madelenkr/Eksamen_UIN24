import EventCard from './EventCard';
import EventPage from './EventPage';
import { useState, useEffect } from 'react';
import Layout from './Layout';
import "../styles/home.css"; // Importer CSS-modulen
import ArtistCard from './ArtistCard';

export default function Home() {
  const [attraction, setAttraction] = useState([]);

  useEffect(() => {
    const getData = async () => {
        fetch(`https://app.ticketmaster.com/discovery/v2/attractions?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&id=K8vZ917K7fV,%20K8vZ917oWOV,%20K8vZ917_YJf,%20K8vZ917bJC7&locale=*`) //Hentet de 4 forskjellige API
          .then((response) => response.json()) //Omstrukturerer til json format.
          .then((data) => setAttraction(data._embedded.attractions)) //statevariabel 
          .catch((error) =>
            console.error("feil under henting fra API", error) //Feilmelding
          );
      };

    getData();
  }, []);

  return (
    <>
      <section>
        {attraction?.map((festival) => (
          <EventCard festival={festival} key={festival.id} />
        ))}
      </section>
    </>
  );
}