//Importerer CSS Styling for å få opp css på siden
import "../styles/artistCard.css";

//tar inn en prop kalt "artists"
export default function ArtistCard({ artists }) {
 // Lager en tom liste som skal holde på de unike artist.
  const filterPushArtist = [];

  artists?.map(artist => {
    const artister = artist?._embedded?.attractions;

    artister?.map(artist => {
      const alreadyInArray = filterPushArtist.find(a => a.id === artist.id)

       // Hvis aikke rtisten eksisterer i arrayen fra før, legger den til.
      if(!alreadyInArray) {
        filterPushArtist.push(artist)
      }
    })
  })

  console.log("filterpushartist", filterPushArtist)
    
  return (
    <article className="artist-card">
        {filterPushArtist.map(artist => (
            <div key={artist.id}>
                <img src={artist.images?.[0]?.url} className="artist-image"/>
                <h3 className="artist-name">{artist?.name}</h3>
            </div>
        ))}
    </article> 
);
  
}