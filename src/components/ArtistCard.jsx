//Importerer CSS Styling for å få opp css på siden
import "../styles/artistCard.css";

//tar inn en prop kalt "artists"
export default function ArtistCard({ artists }) {
 // Lager en tom liste som skal holde på de unike artist.
  const filterPushArtist = [];

  // Mapper ut artists-arrayen
  artists?.map(artist => {
    const artister = artist?._embedded?.attractions;

    // Vi fikk hjelp at Hanne Sørum til koden
    artister?.map(artist => {
      // Sjekker om artisten allerede finnes i filterPushArtist når den sjekker id'er
      const alreadyInArray = filterPushArtist.find(a => a.id === artist.id)

       // Hvis ikke artisten eksisterer i arrayen fra før, legger den til.
      if(!alreadyInArray) {
        filterPushArtist.push(artist)
      };
    })
  });

  // Loggerfører resultatet til konsollbordet 
  console.log("filterpushartist", filterPushArtist)

 //vise frem hver unik artist i en artikkel  
  return (
    <article className="artist-card">
        {filterPushArtist.map(artist => (
            <div key={artist.id}>
                <img src={artist.images?.[0]?.url} className="artist-image"/>
                <h3 className="artist-name">{artist?.name}</h3>
            </div>
        ))};
    </article> 
);
  
};