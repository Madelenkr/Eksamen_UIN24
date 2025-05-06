import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //Henter parametere fra URLen
import Layout from "./Layout";
import "../styles/eventPage.css"; // Importer CSS-modulen
import ArtistCard from "./ArtistCard";

export default function EventPage() {
const { id } = useParams(); //Henter id fra URLen
const [ attraction, setAttraction ] = useState(null); //Statevariabel for å lagre data fra APIen
const [ artists, setArtists] = useState([]);

  useEffect(() => {
        fetch(`https://app.ticketmaster.com/discovery/v2/attractions/${id}?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&id=K8vZ917K7fV,%20K8vZ917oWOV,%20K8vZ917_YJf,%20K8vZ917bJC7&locale=*`) //Hentet de 4 forskjellige API
          .then((response) => response.json()) //Omstrukturerer til json format.
          .then((data) => setAttraction(data)) //statevariabel 
          .catch((error) =>
            console.error("feil under henting fra API", error) //Feilmelding
          );
      }, [id]); //Legger til id som avhengighet for å oppdatere data når id endres


      console.log("attraction", attraction)
    
      const sanger = async () => {
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?attractionId=${id}&locale=NO&apikey=AFEfcxa4XlCTGJA56Jk356h0NkfziiWD`)
        .then((response) => response.json())
        .then((data) => setArtists(data._embedded?.events))
        .catch((error) =>
        console.error("Feil under henting fra API", error)
      );
      }

      useEffect(() => {
        sanger();
      }, [id]);

      console.log("artister", artists)

  return (
    <>
    <article>
          <section>
            <ArtistCard artists={artists}/>
          </section>
    </article>
      <h1>{attraction?.name}</h1>
        <p>{attraction?.info}</p>
    </>
  );
}