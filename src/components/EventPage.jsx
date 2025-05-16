import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //Henter parametere fra URLen 
import "../styles/eventPage.css"; // Importer CSS for styling
import ArtistCard from "./ArtistCard"; // Importer ArtistCard for å vise artistene
import Layout from "./Layout"; // Importer Layout inn i EventPage. Selvom den er gråa ut er den fortsatt i bruk og påvirker EventPage

//Hovedkomponenten for EventPage
export default function EventPage() {
const { id } = useParams(); //Henter id fra URLen
const [ attraction, setAttraction ] = useState(null); //Statevariabel for å lagre data fra APIen om atraksjonen
const [ artists, setArtists] = useState([]); //Statevariabel for å lagre data fra APIen om artistene

  //Henter data fra APIen ved hjelp av id fra URLen
  useEffect(() => {
        fetch(`https://app.ticketmaster.com/discovery/v2/attractions/${id}?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&id=K8vZ917K7fV,%20K8vZ917oWOV,%20K8vZ917_YJf,%20K8vZ917bJC7&locale=*`) //Hentet de 4 forskjellige API
          .then((response) => response.json()) //Omstrukturerer til json format.
          .then((data) => setAttraction(data)) //statevariabel 
          .catch((error) =>
            console.error("feil under henting fra API", error) //Feilmelding
          );
      }, [id]); //Legger til id som avhengighet for å oppdatere data når id endres

      //Henter artistene fra APIen ved hjelp av id fra URLen
      const sanger = async () => {
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?attractionId=${id}&locale=NO&apikey=AFEfcxa4XlCTGJA56Jk356h0NkfziiWD`)
        .then((response) => response.json()) //Omstrukturerer til json format.
        .then((data) => setArtists(data._embedded?.events)) //statevariabel
        .catch((error) =>
        console.error("Feil under henting fra API", error) //Feilmelding
      );
      }
     
      //kjører sanger useeffect når id endres
      useEffect(() => {
        sanger();
      }, [id]);

  return (
    <>
    <h1>{attraction?.name}</h1> {/*Navn på attraksjon*/}
    <p>{attraction?.info}</p> {/*Info om attraksjon*/}
    
    {/*seksjon for tilknyttede artister*/}
    <article>
          <section>
            <ArtistCard artists={artists}/> 
          </section>
    </article>
    </>
  );
}