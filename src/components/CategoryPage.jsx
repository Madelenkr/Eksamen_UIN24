import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryEvent from "./CategoryEvent";
import CategoryAttraction from "./CategoryAttraction";
import CategoryVenue from "./CategoryVenue";
import "../styles/categoryPage.css";

export default function CategoryPage() {
  const { slug } = useParams();
  const [events, setEvents] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [venues, setVenues] = useState([]);
  const [filterSearch, setFilterSearch] = useState("");

  const newSlug = slug.toUpperCase().replace("_", "/");

  const slugTranslate = {
    musikk: "music",
    sport: "sports",
    teater_show: "shows"
  };
  const translateSlug = slugTranslate[slug.toLowerCase()] || slug;

  // Hent events
  const getEvents = async () => {
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&classificationName=${translateSlug}&locale=*&size=20`);
      const data = await response.json();
      setEvents(data._embedded?.events || []);
    } catch (error) {
      console.error("Feil under henting av events fra API", error);
    }
  };

  // Hent attractions
  const getAttractions = async () => {
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&classificationName=${translateSlug}&locale=*&size=20`);
      const data = await response.json();
      setAttractions(data._embedded?.attractions || []);
    } catch (error) {
      console.error("Feil under henting av attractions fra API", error);
    }
  };

  useEffect(() => {
    getEvents();
    getAttractions();
  }, [slug]);

  // Filtrering av events
  const actualEvents = events.filter(event =>
    event.dates?.start &&
    event.classifications?.some(c =>
      ["music", "sports", "arts & theatre", "miscellaneous"].includes(c.segment?.name?.toLowerCase())
    )
  );

  // Filtrering av venues
  const venuesData = actualEvents
    .map(event => event._embedded?.venues || [])
    .flat()
    .filter((venue, index, self) =>
      venue && self.findIndex(v => v.id === venue.id) === index // unike venues
    );
  useEffect(() => {
    setVenues(venuesData);
  }, [events]);

  const filterEvents = events.filter(event => 
    event.name?.toLowerCase().includes(filterSearch.toLowerCase())
  )
  const filterAttractions = attractions.filter(attraction => 
    attraction.name?.toLowerCase().includes(filterSearch.toLowerCase())
  )
  const filterVenues = venues.filter(venue =>
  venue.name?.toLowerCase().includes(filterSearch.toLowerCase())
);

  return (
    <>
      <h1>{newSlug}</h1>

      <input 
        type="text"
        placeholder="Søk her..."
        value={filterSearch}
        onChange={e => setFilterSearch(e.target.value)}
      />

      <h2>Arrangementer</h2>
      <section className="category-events">
        {filterEvents.length > 0 ? (
          filterEvents.map((event) => (
            <CategoryEvent event={event} key={event.id} />
          ))
        ) : (
          <p>Ingen arrangementer funnet.</p>
        )}
      </section>

      <h2>Attraksjoner</h2>
      <section className="category-attractions">
        {filterAttractions.length > 0 ? (
          filterAttractions.map(attraction => (
            <CategoryAttraction event={attraction} key={attraction.id} />
          ))
        ) : (
          <p>Ingen attraksjoner funnet.</p>
        )}
      </section>

      <h2>Spillesteder</h2>
      <section className="category-venues">
        {filterVenues.length > 0 ? (
          filterVenues.map(venue => (
            <CategoryVenue venue={venue} key={venue.id} />
          ))
        ) : (
          <p>Ingen spillesteder funnet.</p>
        )}
      </section>
    </>
  );
}
