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
    <>
        {filterPushArtist.map(artist => (
            <div key={artist.id}>
                <img src={artist.images?.[0]?.url}/>
                <h3>{artist?.name}</h3>
            </div>
        ))}
    </>
);
  
}