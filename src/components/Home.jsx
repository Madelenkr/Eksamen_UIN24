import EventCard from './EventCard';
import EventPage from './EventPage';
import { useState, useEffect } from 'react';
import Layout from './Layout';
import "../styles/home.css"; // Importer CSS-modulen
import ArtistCard from './ArtistCard';
import CityCard from './CityCard';

export default function Home() {
  const [attraction, setAttraction] = useState([]);
   const [pageContent, setPageContent] = useState ([]);
    const [city, setCity] = useState("Stockholm");

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

  useEffect (() => {
  const getCityEvents = async () => {
        fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&locale=*&city=${city}&size=10`) //Hentet de 4 forskjellige API
          .then((response) => response.json()) //Omstrukturerer til json format.
          .then((data) => setPageContent(data._embedded.events)) //statevariabel 
          .catch((error) =>
            console.error("feil under henting fra API", error) //Feilmelding
          );
      };

    getCityEvents();
  }, [city]); // Kjør på nytt når city endres


  return (
    <>
      <section>
        {attraction?.map((festival) => (
          <EventCard festival={festival} key={festival.id} />
        ))}
      </section>
        <section className='home-button-section'>
          <button onClick={() => setCity("Oslo")} className='city-button'>Oslo</button>
          <button onClick={() => setCity("Stockholm")} className='city-button'>Stockholm</button>
          <button onClick={() => setCity("Madrid")} className='city-button'>Madrid</button>
          <button onClick={() => setCity("Helsinki")} className='city-button'>Helsinki</button>
        </section>
        <section className='home-title-section'>
          <h1 className='city-title'>I {city} kan du oppleve:</h1>
        </section>
        <section>
        {pageContent?.map((fetchPlace) => (
          <CityCard fetchPlace={fetchPlace} key={fetchPlace.id} />
        ))}
      </section>

    </>
  );
}