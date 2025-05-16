import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryEvent from "./CategoryEvent";
import CategoryAttraction from "./CategoryAttraction";
import CategoryVenue from "./CategoryVenue";
import "../styles/categoryPage.css";

export default function CategoryPage() {
  const { slug } = useParams(); 
  const [events, setEvents] = useState([]); //usestate for event
  const [attractions, setAttractions] = useState([]); //usestate for attractions
  const [venues, setVenues] = useState([]); //usestate for venues
  const [filterSearch, setFilterSearch] = useState(""); //usestate for søkefelt
  const [filterDate, setFilterDate] = useState(""); //usestate for dato
  const [filterCountry, setFilterCountry] = useState(""); //usestate for land
  const [filterCity, setFilterCity] = useState(""); //usestate for by

  const newSlug = slug.toUpperCase().replace("_", "/"); //Sørger for at slug er lesbar i overskriften

  //Oversetter norske slugs til engelske verdier som brukes i APIet
  const slugTranslate = {
    musikk: "music",
    sport: "sports",
    teater_show: "arts & theatre"
  };
  const translateSlug = slugTranslate[slug.toLowerCase()] || slug; // Enten bruk oversettelse eller orginal slug

  // Hent events fra ticketmaster api
  const getEvents = async () => {
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&classificationName=${translateSlug}&locale=*&size=20`) //Hentet de 4 forskjellige API
          .then((response) => response.json()) //Omstrukturerer til json format.
          .then((data) => setEvents(data._embedded.events)) //statevariabel 
          .catch((error) =>
            console.error("feil under henting fra API", error) //Feilmelding
          );
      };

  // Hent attractions fra ticketmaster api
  const getAttractions = async () => {
        fetch(`https:app.ticketmaster.com/discovery/v2/attractions.json?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&classificationName=${translateSlug}&locale=*&size=20`) //Hentet de 4 forskjellige API
          .then((response) => response.json()) //Omstrukturerer til json format.
          .then((data) => setAttractions(data._embedded.attractions)) //statevariabel 
          .catch((error) =>
            console.error("feil under henting fra API", error) //Feilmelding
          );
      };

  //kjører getEvents og getAttractions når slug endres
  useEffect(() => {
    getEvents();
    getAttractions();
  }, [slug]);

  //Filtrering av events
  const actualEvents = events.filter(
    (event) =>
      event.dates?.start &&
      event.classifications?.some((c) =>
        ["music", "sports", "arts & theatre", "miscellaneous"].includes(
          c.segment?.name?.toLowerCase()
        )
      )
  );

  //Filtrering av venues
  const venuesData = actualEvents
    .map((event) => event._embedded?.venues || []) //henter venues fra hvert event
    .flat()
    .filter(
      (venue, index, self) =>
        venue && self.findIndex((v) => v.id === venue.id) === index //fjerner duplikater basert på id
    );

  //oppdaterer state for venues
  useEffect(() => {
    setVenues(venuesData);
  }, [events]);

  //filtrerer events basert på søk, dato, land og by
  const filterEvents = events.filter((event) => {
    const nameMatch = event.name?.toLowerCase().includes(filterSearch.toLowerCase());
    const dateMatch = filterDate === "" || event.dates?.start?.localDate === filterDate;

    const venues = event._embedded?.venues || [];

    const countryMatch =
      filterCountry === "" ||
      venues.some((venue) =>
        (venue.country?.countryCode || "").toLowerCase().includes(filterCountry.toLowerCase())
      );

    const cityMatch =
      filterCity === "" ||
      venues.some((venue) =>
        (venue.city?.name || "").toLowerCase().includes(filterCity.toLowerCase())
      );

    return nameMatch && dateMatch && countryMatch && cityMatch;
  });

  //filtrerer attraksjoner basert på søketekst
  const filterAttractions = attractions.filter((attraction) =>
    attraction.name?.toLowerCase().includes(filterSearch.toLowerCase())
  );

  //filtrerer spillesteder basert på søketeks
  const filterVenues = venues.filter((venue) =>
    venue.name?.toLowerCase().includes(filterSearch.toLowerCase())
  );

  return (
    <>
      {/* Overskrift */}
      <h1>{newSlug}</h1>

      {/* Filterseksjon */}
      <h2 className="filter-h2">Filtrert søk</h2>
      <section className="filter-section">
        <input className="filter-input"
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
        <input className="filter-input"
          type="text"
          placeholder="Land (f.eks. NO, US)"
          value={filterCountry}
          onChange={(e) => setFilterCountry(e.target.value)}
        />
        <input className="filter-input"
          type="text"
          placeholder="By (f.eks. Oslo)"
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
        />
      </section>

      {/* søkeseksjon */}
      <h2 className="search-h2">Søk</h2>
      <section className="search-section">
      <input className="search-input"
          type="text"
          placeholder="Søk her..."
          value={filterSearch}
          onChange={(e) => setFilterSearch(e.target.value)}
        />
        </section>

      {/* Liste over arrangementer */}
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

      {/* Liste over attraksjoner */}
      <h2>Attraksjoner</h2>
      <section className="category-attractions">
        {filterAttractions.length > 0 ? (
          filterAttractions.map((attraction) => (
            <CategoryAttraction event={attraction} key={attraction.id} />
          ))
        ) : (
          <p>Ingen attraksjoner funnet.</p>
        )}
      </section>

      {/* Liste over spillesteder */}
      <h2>Spillesteder</h2>
      <section className="category-venues">
        {filterVenues.length > 0 ? (
          filterVenues.map((venue) => (
            <CategoryVenue venue={venue} key={venue.id} />
          ))
        ) : (
          <p>Ingen spillesteder funnet.</p>
        )}
      </section>
    </>
  );
}
