import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanity/client";

export default function SanityEventDetails() {
  const { id } = useParams(); // Henter id fra URL
  const [eventDetails, setEventDetails] = useState(null); // State for eventdetaljer
  const [loading, setLoading] = useState(true); // Loading-state

  useEffect(() => {

      console.log("ID fra URL:", id); // <-- sjekk dette i konsollen
    if (!id) return; // Ikke fetch hvis id mangler

    const query = `
      *[_type == "event" && _id == $id][0]{
        title,
        description,
        date,
        location,
        image {
          asset -> {
            _id,
            url
          }
        }
      }`;

    client.fetch(query, { id }).then((data) => {
      setEventDetails(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div>Loading...</div>; // Vis loading

  if (!eventDetails) return <div>Fant ikke eventet.</div>; // Hvis data ikke finnes

  return (
    <article className="categoryCard">
      {eventDetails.image?.asset?.url && (
        <img
          src={eventDetails.image.asset.url}
          alt={eventDetails.title}
          className="category-image"
        />
      )}
      <h3>{eventDetails.title}</h3>
      <p>{eventDetails.description}</p>
      <p>{eventDetails.date}</p>
      <p>{eventDetails.location}</p>
    </article>
  );
}
