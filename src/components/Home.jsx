export default function Home() {
    
   {

    const getData = async () => {
        fetch(`https://app.ticketmaster.com/discovery/v2/attractions?apikey=QqvpEAdIbQPJB9GGqnSKAZvmpXwz79Y2&id=K8vZ917K7fV,%20K8vZ917oWOV,%20K8vZ917_YJf,%20K8vZ917bJC7&locale=*`)
          .then((response) => response.json())
          .then((data) => console.log(data._embedded.attractions))
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