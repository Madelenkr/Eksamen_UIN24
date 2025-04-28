export default function Home() {

    let events = ['tons%20of%20rock', 'skeikampenfestivalen', 'Neon', 'Findings'];
    
    for (let i = 0; i < events.length; i++) {

    let event = events[i];

    const getData = async () => {
        fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&keyword=${event}&locale=*`)
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) =>
            console.error("feil under henting fra API", error)
          );
      };

    getData();
    }

    return (
        <h1>Home</h1>
    )
}