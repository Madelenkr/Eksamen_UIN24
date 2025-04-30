import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //Henter parametere fra URLen

export default function EventPage() {
const { id } = useParams(); //Henter id fra URLen
const [ attraction, setAttraction ] = useState([]); //Statevariabel for å lagre data fra APIen

  useEffect(() => {
        fetch(`https://app.ticketmaster.com/discovery/v2/attractions/${id}?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&id=K8vZ917K7fV,%20K8vZ917oWOV,%20K8vZ917_YJf,%20K8vZ917bJC7&locale=*`) //Hentet de 4 forskjellige API
          .then((response) => response.json()) //Omstrukturerer til json format.
          .then((data) => setAttraction(data)) //statevariabel 
          .catch((error) =>
            console.error("feil under henting fra API", error) //Feilmelding
          );
      }, [id]); //Legger til id som avhengighet for å oppdatere data når id endres

  return (
    <>
      <h1>{attraction?.name}</h1>
        <p>{attraction?.info}</p>
    </>
  );
}