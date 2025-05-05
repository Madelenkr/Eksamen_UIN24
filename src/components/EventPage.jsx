import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //Henter parametere fra URLen
import Layout from "./Layout";
import "../styles/eventPage.css"; // Importer CSS-modulen
import ArtistCard from "./ArtistCard";

export default function EventPage() {
const { id } = useParams(); //Henter id fra URLen
const [ attraction, setAttraction ] = useState([]); //Statevariabel for å lagre data fra APIen
const [ sanger, setArtists] = useState([]);

  useEffect(() => {
        fetch(`https://app.ticketmaster.com/discovery/v2/attractions/${id}?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&id=K8vZ917K7fV,%20K8vZ917oWOV,%20K8vZ917_YJf,%20K8vZ917bJC7&locale=*`) //Hentet de 4 forskjellige API
          .then((response) => response.json()) //Omstrukturerer til json format.
          .then((data) => setAttraction(data)) //statevariabel 
          .catch((error) =>
            console.error("feil under henting fra API", error) //Feilmelding
          );
      }, [id]); //Legger til id som avhengighet for å oppdatere data når id endres


      console.log(attraction)
    
      useEffect (() => {
        fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&keyword=findings&locale=*`)
        .then((response) => response.json())
        .then((data) => setArtists(data._embedded?.attractions))
        .catch((error) =>
        console.error("Feil under henting fra API", error)
      );
      },[]);

  return (
    <>
    <Layout>
    <article>
          <section>
          {sanger?.map((pass) => (
          <EventCard pass={pass} key={pass.id} />
          ))};
            </section>
      {/*attraction?.map((pass) => {
        const artists = pass._embedded?.attractions;
        return (
          <article>
              <h2>{artists.name}</h2>
          </article>
        );
      })*/}
    </article>
      <h1>{attraction?.name}</h1>
        <p>{attraction?.info}</p>
        <ArtistCard attraction={attraction}/>
    </Layout>
    </>
  );
}