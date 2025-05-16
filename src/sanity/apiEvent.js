import React, { useState, useEffect } from 'react';

export default function ApiEvent() {
  const [apiEvent, setApiEvent] = useState([]);
  const keyword = 'findings';
  const apiKey = 'QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2';

  useEffect(() => {
    const fetchApiEvent = () => {
      fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=${keyword}&locale=*`)
        .then((response) => response.json())
        .then((data) => setApiEvent((data._embedded && data._embedded.events) || []))
        .catch((error) => console.log('Feil ved henting av data:', error));
    };

    fetchApiEvent();
  }, []);

  return (
    <section>
      <ul>
        {apiEvent.map((event) => (
          <li key={event.id}>
            {event.name} {event.id}
          </li>
        ))}
      </ul>
    </section>
  );
}