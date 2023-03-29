import React, { useState } from 'react';
import artists from './Artist';
import AddListenButton from './AddListenButton';
import PendientArtist from '../Pages/PendientArtist';

export default function ArtisList() {
  const [artistPend, serArtistPend] = useState(artists.filter(artist => artist.listen === false));
  const [artistListened, setArtistListened] = useState(artists.filter(artist => artist.listen === true).map(a => ({name: a.name, album: a.album, year: a.year})));

  const addListen = (artist) => {
    const updatedPendList = artistPend.filter(a => a.name !== artist.name);
    const updatedListenedList = [...artistListened, artist];
    serArtistPend(updatedPendList);
    setArtistListened(updatedListenedList);
  };

  const artistPendient = artistPend.map((a) => (
    <div className='border-2'>
      <li key={a.name}>
        <h2>{a.name}</h2>
        <p>Album: {a.album}</p>
        <p>Año: {a.year}</p>
        <AddListenButton artist={a} onAddListen={addListen} />
      </li>
    </div>
  ));

  const artistListenedItems = artistListened.map((a) => (
    <div className='border-2'>
      <li key={a.name}>
        <h2>{a.name}</h2>
        <p>Álbum: {a.album}</p>
        <p>Año: {a.year}</p>
      </li>
    </div>
  ));

  return (
    <>
      <div className='container mx-auto p-10'>
        <ul className='bg-red-500 grid grid-cols-4 gap-2 border-slate-800 border-2'>{artistPendient}</ul>
        {artistListenedItems}
        <PendientArtist pendiente={artistListened} />

      </div>
    </>
  );
}