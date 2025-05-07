import { useEffect, useState } from "react";
import "../styles/artistCard.css";
export default function ArtistCard({ artists }) {

  const filterPushArtist = [];

  artists?.map(artist => {
    const artister = artist?._embedded?.attractions;

    artister?.map(artist => {
      const alreadyInArray = filterPushArtist.find(a => a.id === artist.id)


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