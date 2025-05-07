import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import CategoryEvent from "./CategoryEvent";

export default function CategoryPage() {
  const { slug } = useParams();
  const [events, setEvents] = useState([])
  
  const newSlug = slug.toUpperCase().replace("_", "/");

  const slugTranslate = {
    musikk: "music",
    sport: "sports",
    teater_show: "shows"
  }
  const translateSlug = slugTranslate[slug.toLowerCase()] || slug;

  const getEvents = async () => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&classificationName=${translateSlug}&locale=*&size=10`)
    .then((response) => response.json())
    .then((data) => setEvents(data._embedded.events))
    .catch((error) => console.error("feil under henting av events fra API", error))
  }

  useEffect(() => {
    getEvents()
  }, [slug])
  

  return (
    <>
      <h1>{newSlug}</h1>

      <section>
        <h2>Events</h2>
        {events.map(event => (
          <CategoryEvent event={event} key={event.id} />
        ))}
      </section>
    </>
  );
}
